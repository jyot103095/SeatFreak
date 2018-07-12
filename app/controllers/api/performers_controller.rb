class Api::PerformersController < ApplicationController
  def show
    @performer = Performer.find(params[:id])
    render '/api/performers/show.json.jbuilder'
  end
end
