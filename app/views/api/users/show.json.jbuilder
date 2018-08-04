json.id @user.id
json.email @user.email
json.fName @user.f_name
json.lName @user.l_name
json.ticketIds @user.ticket_ids
json.trackedItems do 
	json.events @trackings.where(trackable_type: "Event").map(&:trackable_id)
	json.performers @trackings.where(trackable_type: "Performer").map(&:trackable_id)
	json.venues @trackings.where(trackable_type: "Venue").map(&:trackable_id)
end