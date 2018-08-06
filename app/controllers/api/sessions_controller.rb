class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login!(@user)
      trackings = @user.trackings

      @tracked_events = trackings.where(trackable_type: "Event").map(&:trackable)
      @tracked_performers = trackings.where(trackable_type: "Performer").map(&:trackable)
      @tracked_venues = trackings.where(trackable_type: "Venue").map(&:trackable)

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
