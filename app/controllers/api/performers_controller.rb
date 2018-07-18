class Api::PerformersController < ApplicationController
  def show
    @performer = Performer.all.inclues(events: [:performers, :venue]).find(params[:id])
    render '/api/performers/show.json.jbuilder'
  end

  def show_category
    @performers = Performer.where(category: params[:category]).includes(events: [:performers, :venue])
    render '/api/performers/index.json.jbuilder'
  end
end
