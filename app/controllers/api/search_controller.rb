class Api::SearchController < ApplicationController

  def index

    @results = PgSearch.multisearch(params[:query]).includes(:searchable)

    @events = @results.where(searchable_type: "Event")
    @performers = @results.where(searchable_type: "Performer")
    @venues = @results.where(searchable_type: "Venue")

    render '/api/search/index.json.jbuilder'
  end

end
