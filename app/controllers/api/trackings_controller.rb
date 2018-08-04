class Api::TrackingsController < ApplicationController 
	before_action :ensure_logged_in

	def create
		@tracking = Tracking.new(tracking_params)
		@tracking.user_id = current_user.id

		if @tracking.save
			@trackings = current_user.trackings
			render "/api/trackings/show.json.jbuilder"
		else
			render json: @tracking.errors.full_messages, status: 422
		end
	end

	def destroy
		tracking = Tracking.where(tracking_params).find_by(user_id: current_user.id)
		tracking.destroy

		@trackings = current_user.trackings

		render "/api/trackings/show.json.jbuilder"
	end

	private

	def tracking_params
		params.require(:tracking).permit(:trackable_type, :trackable_id)
	end
end