class Api::SessionsController < ApplicationController
  def create
    if logged_in?
      render json: ['Already login'], status: 428
      return
    end

    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/create"
    else
      render json: ['Account is incorrect. Please try again!'], status: 422
    end
  end

  def destroy
    if logged_out?
      render json: ['Already logout'], status: 428
      return
    end

    current_user.reset_session_token!
    current_user = nil
    session[:session_token] = nil
    render json: {}
  end
end
