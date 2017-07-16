class Api::UsersController < ApplicationController
  before_action :require_logged_in!, except: [:create]

  def index
    @users = User.topten
  end

  def show
    @user = User.includes(in_follows: :follower)
      .includes(out_follows: :following)
      .friendly.find(params[:id])

    if @user
      @photos = @user.photos
        .includes(:likes, :comments)
        .order('photos.created_at DESC')
        .limit(6)
      @photos_count = @user.photos.count

      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def create
    if logged_in?
      render json: ['Already login'], status: 428
      return
    end

    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :create
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    @user.slug = nil

    update_type = params[:id]
    if @user.update_user(user_params, update_type)
      if %w(avatar edit password delete_avatar).include?(update_type)
        render update_type.to_sym
      else
        render :show
      end
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def search
    if params[:query].present?
      @users = User.where("username ~ ?", params[:query])
                   .order('username ASC')
                   .limit(20)
    else
      @users = User.none
    end

    render :search
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :avatar,
      :name,
      :bio,
      :new_password
    )
  end
end
