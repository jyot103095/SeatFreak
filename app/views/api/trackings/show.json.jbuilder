json.trackedEvents @trackings.where(trackable_type: "Event").map(&:trackable_id)
json.trackedPerformers @trackings.where(trackable_type: "Performer").map(&:trackable_id)
json.trackedVenues @trackings.where(trackable_type: "Venue").map(&:trackable_id)