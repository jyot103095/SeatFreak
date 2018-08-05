json.id @user.id
json.email @user.email
json.fName @user.f_name
json.lName @user.l_name
json.ticketIds @user.ticket_ids
json.trackedItems do 
	json.trackedEvents @user.trackings.where(trackable_type: "Event").map(&:trackable_id)
	json.trackedPerformers @user.trackings.where(trackable_type: "Performer").map(&:trackable_id)
	json.trackedVenues @user.trackings.where(trackable_type: "Venue").map(&:trackable_id)
end