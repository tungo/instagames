class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render :show
    else
      error_message = 'Sorry, your account is incorrect. Please try again.'
      render json: [error_message], status: 422
    end
  end

  def destroy
    if logged_in?
      current_user.reset_session_token!
      session[:session_token] = nil
      render json: {}
    else
      render json: {}, status: 422
    end
  end
end
