json.trackedEvents @trackings.where(trackable_type: "Event").trackable_ids
json.trackedPerformers @trackings.where(trackable_type: "Performer").trackable_ids
json.trackedVenues @trackings.where(trackable_type: "Venue").trackable_ids