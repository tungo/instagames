class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ['invalid credentials'], status: 422
    end
  end

  def destroy
    if logged_in?
      current_user.reset_session_token!
      current_user = nil
      session[:session_token] = nil
      render json: {}
    else
      render json: {}, status: 422
    end
  end
end
