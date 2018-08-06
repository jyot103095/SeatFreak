json.user do 
	json.id @user.id
	json.email @user.email
	json.fName @user.f_name
	json.lName @user.l_name
	json.ticketIds @user.ticket_ids
	json.trackedItems do 
		json.trackedEvents @tracked_events.map(&:id)
		json.trackedPerformers @tracked_performers.map(&:id)
		json.trackedVenues @tracked_venues.map(&:id)
	end
end

json.events ({})
json.events do
	@tracked_events.each do |event|
		json.set! event.id do 
			json.extract! event, :id, :title
		  json.eventOn event.event_on.localtime.strftime("%a %b %d at %I:%M %p")
		  json.ticketIds event.ticket_ids
		  json.performers event.performer_ids
		  json.venueId event.venue_id
		end
	end
end

json.performers({})
json.performers do
	@tracked_performers.each do |performer|
		json.set! performer.id do
      json.extract! performer, :id, :name, :category, :classification
      json.photoUrl url_for(performer.photo)
    end
	end
end

json.venues ({})
json.venues do
	@tracked_venues.each do |venue|
    json.set! venue.id do
      json.extract! venue, :id, :name, :city, :address
      json.photoUrl url_for(venue.photo)
    end
	end
end