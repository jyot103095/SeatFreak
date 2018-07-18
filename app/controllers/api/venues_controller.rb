class Api::VenuesController < ApplicationController
  def show
    @venue = Venue.all.includes(events: [:tickets, :performers]).find(params[:id])

    render '/api/venues/show.json.jbuilder'
  end

  def index
    @venues = Venue.all
    render '/api/venues/index.json.jbuilder'
  end
end
