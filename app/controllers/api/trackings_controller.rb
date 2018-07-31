class Api::TrackingsController < ApplicationController 
	def create
		@tracking = Tracking.new(tracking_params)
		@tracking.user_id = current_user.id

		if @tracking.save
			render "/api/users/show.json.jbuilder"
		else
			render errors: @tracking.errors.full_messages, status: 422
		end
	end

	def destroy
		@tracking = Tracking.find(params[:id])
		@tracking.destroy

		render "/api/users/show.json.jbuilder"
	end

	private

	def tracking_params
		params.require(:tracking).permit(:trackable_type, :trackable_id)
	end
end