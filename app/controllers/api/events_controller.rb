class Api::EventsController < ApplicationController
  def show
    @event = Event.with_attached_photo.find(params[:id])

    render '/api/events/show.json.jbuilder'
  end

  def index
    @events = Event.with_attached_photo.includes(:performers, :venue).sample(12)
    @performers = Performer.with_attached_photo.sample(12)
    @venues = Venue.with_attached_photo.sample(12)

    render '/api/events/index.json.jbuilder'
  end
end
