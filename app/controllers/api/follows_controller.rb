class Api::FollowsController < ApplicationController
  before_action :require_logged_in!

  def following
    @follows = Follow.where(follower_id: params[:user_id])
    render :index
  end

  def followers
    @follows = Follow.where(following_id: params[:user_id])
    render :index
  end

  def create
    @follow = Follow.new(following_id: params[:user_id])
    @follow.follower_id = current_user.id

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.out_follows.find_by_following_id(params[:user_id])

    if @follow.destroy
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end
end
