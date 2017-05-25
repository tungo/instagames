class Api::PhotosController < ApplicationController
  before_action :require_logged_in!

  def index
    @photos = current_user.fetch_photos(fetch_params)
      .includes(:user)
      .includes(:likes)
      .includes(:comments)

    if @photos
      render :index
    else
      render json: {}
    end
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo
      .includes(:user)
      .includes(:likes)
      .includes(:comments)
      .find(params[:id])
  end

  def destroy
    @photo = current_user.photos.find(params[:id])

    if @photo.destroy
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def user
    @photos = User.find(params[:user_id])
      .fetch_photos(fetch_params(user_only: true))
      .includes(:user)
      .includes(:likes)
      .includes(:comments)

    if @photos
      render :user
    else
      render json: @photos.errors.full_messages, status: 422
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:caption, :image)
  end

  def fetch_params(options = {})
    params.require(:query).permit(:limit, :max_created_at)
      .merge(options)
  end
end
