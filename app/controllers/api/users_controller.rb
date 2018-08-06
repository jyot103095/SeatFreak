class Api::UsersController < ApplicationController
  def show 
    @user = current_user
    trackings = current_user.trackings

    @tracked_events = trackings.where(trackable_type: "Event").map(&:trackable)
    @tracked_performers = trackings.where(trackable_type: "Performer").map(&:trackable)
    @tracked_venues = trackings.where(trackable_type: "Venue").map(&:trackable)

    render '/api/users/show.json.jbuilder'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      trackings = @user.trackings

      @tracked_events = trackings.where(trackable_type: "Event").map(&:trackable)
      @tracked_performers = trackings.where(trackable_type: "Performer").map(&:trackable)
      @tracked_venues = trackings.where(trackable_type: "Venue").map(&:trackable)

      render '/api/users/show.json.jbuilder'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      @trackings = @user.trackings
      render '/api/users/show.json.jbuilder'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :f_name, :l_name)
  end
end
