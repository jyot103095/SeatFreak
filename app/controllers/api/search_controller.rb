class Api::SearchController < ApplicationController

  def index

    @results = PgSearch.multisearch(params[:query]).includes(:searchable)

    @events = @results.where(searchable_type: "Event").map(&:searchable)
    @performers = @results.where(searchable_type: "Performer").map(&:searchable)
    @venues = @results.where(searchable_type: "Venue").map(&:searchable)

    render '/api/search/index.json.jbuilder'
  end
end
