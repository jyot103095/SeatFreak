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
    logout
    render '/static_pages/root'
  end
end
