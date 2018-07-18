class Api::VenuesController < ApplicationController
  def show
    @venue = Venue.all.includes(events: :tickets).find(params[:id])

    render '/api/venues/show.json.jbuilder'
  end
end
