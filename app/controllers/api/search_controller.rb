class Api::SearchController < ApplicationController

  def index

    debugger
    @results = PgSearch.multisearch(params[:query])
    render json: @results
  end

end
