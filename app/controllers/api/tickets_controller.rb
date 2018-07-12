class Api::TicketsController < ApplicationController
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
    @ticket = Ticket.find(params[:id])
    @ticket.on_sale = true

    if @ticket.save
      render '/api/tickets/show.json.jbuilder'
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def update
    @ticket = Ticket.find(params[:id])

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
