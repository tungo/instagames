class Api::SessionsController < ApplicationController
  def create
    if logged_in?
      render json: ['already login'], status: 422 and return
    end

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
    if logged_out?
      render json: ['already logout'], status: 422 and return
    end

    current_user.reset_session_token!
    current_user = nil
    session[:session_token] = nil
    render json: {}
  end
end
