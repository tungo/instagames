class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :logged_out?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def logged_out?
    current_user.nil?
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def require_logged_in!
    if !logged_in?
      render json: ['Require authentication'], status: 422
      return
    end
  end
end
