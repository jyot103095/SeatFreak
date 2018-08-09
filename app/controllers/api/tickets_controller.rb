class Api::TicketsController < ApplicationController
  before_action :ensure_logged_in, only: [:buy, :update]

  def index
    @tickets = Ticket.where(user_id: current_user.id).includes(event: [:performers, :venue])
    render '/api/tickets/index.json.jbuilder'
  end

  def show
    @ticket = Ticket.find(params[:id])

    render '/api/tickets/show.json.jbuilder'
  end

  def buy
    @ticket = Ticket.find(params[:id])

    @ticket.user_id = current_user.id
    @ticket.on_sale = false
    if @ticket.save
      render '/api/tickets/show.json.jbuilder'
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def sell
    @ticket = Ticket.find(params[:ticket][:id])
    @ticket.on_sale = true
    @ticket.price = params[:ticket][:price]

    if @ticket.save
      render '/api/tickets/show.json.jbuilder'
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def update
    @ticket = Ticket.find(params[:ticket][:id])

    if @ticket.update(ticket_params)
      render '/api/tickets/show.json.jbuilder'
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  private

  def ticket_params
    params.require(:ticket).permit(:section, :row, :seat, :price)
  end
end
