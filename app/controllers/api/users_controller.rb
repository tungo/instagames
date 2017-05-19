class Api::UsersController < ApplicationController
  before_action :require_logged_in!, except: [:create]

  def show
    @user = User.friendly.includes(:photos).find(params[:id])

    if @user
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :avatar)
  end
end
