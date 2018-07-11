class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login!(@user)
      render '/api/users/show.json.jbuilder'
    else
      render json: ["Invalid username/password"], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["Nobody is currently signed in"], status: 404
    end
  end
end
