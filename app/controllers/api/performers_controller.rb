class Api::PerformersController < ApplicationController
  def show
    @performer = Performer.all.includes(events: [:performers, :venue]).find(params[:id])
    render '/api/performers/show.json.jbuilder'
  end

  def show_category
    @performers = Performer.where(category: params[:category]).includes(:events)
    render '/api/performers/index.json.jbuilder'
  end
end
