class Api::VenuesController < ApplicationController
  def show
    @venue = Venue.with_attached_photo.includes(events: [:tickets, :performers]).find(params[:id])

    render '/api/venues/show.json.jbuilder'
  end

  def index
    @venues = Venue.with_attached_photo
    render '/api/venues/index.json.jbuilder'
  end
end
