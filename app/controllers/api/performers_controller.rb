class Api::PerformersController < ApplicationController
  def show
    @performer = Performer.with_attached_photo.includes(events: [:performers, :venue]).find(params[:id])
    render '/api/performers/show.json.jbuilder'
  end

  def show_category
    @performers = Performer.with_attached_photo.where(category: params[:category]).includes(:events)
    render '/api/performers/index.json.jbuilder'
  end
end
