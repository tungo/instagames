class Api::PhotosController < ApplicationController
  before_action :require_logged_in!

  def index
    @photos = Photo.find_by_user_id(current_user.id)
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
    @photo = Photo.find(params[:id])
  end

  def update
    @photo = Photo.find(params[:id])

    if @photo.update_attributes(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])

    if @photo.destroy
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def user
    @photos = Photo.find_by_user_id(params[:user_id])
  end

  private

  def photo_params
    params.require(:photo).permit(:url)
  end
end
