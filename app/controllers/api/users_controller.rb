class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render '/api/users/show.json.jbuilder'
    else
      render json: { errors: @user.errors.full_messages, status: 422 }
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render '/api/users/show.json.jbuilder'
    else
      render json: { errors: @user.errors.full_messages, status: 422 }
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :f_name, :l_name)
  end
end
