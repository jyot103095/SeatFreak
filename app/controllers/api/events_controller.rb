class Api::EventsController < ApplicationController
  def show
    @event = Event.find(params[:id])

    render '/api/events/show.json.jbuilder'
  end

  def index
    @events = Event.all.includes(:performers, :venue).sample(12)

    if (logged_in)
    	trackings = current_user.trackings
    	tracked_events = trackings.where(trackable_type: "Event").map(&:trackable)
    	@events.concat(tracked_events)
    	@performers = trackings.where(trackable_type: "Performer").map(&:trackable)
    	@venues = trackings.where(trackable_type: "Venue").map(&:trackable)	
    end
    render '/api/events/index.json.jbuilder'
  end
end
