class Api::EventsController < ApplicationController
  def show
    @event = Event.find(params[:id])

    render '/api/events/show.json.jbuilder'
  end

  def index
    @events = Event.all.includes(:performers)

    render '/api/events/index.json.jbuilder'
  end
end
