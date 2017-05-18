class Api::PhotosController < ApplicationController
  before_action :require_logged_in!

  def index
    @photos = Photo.includes(:user).where(user_id: current_user.id)

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
    @photo = Photo.includes(:user).find(params[:id])
  end

  def update
    @photo = current_user.photos.find(params[:id])

    if @photo.update_attributes(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
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
    @photos = Photo.includes(:user).where(user_id: params[:user_id])

    if @photos
      render :index
    else
      render json: {}
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:caption, :image)
  end
end
