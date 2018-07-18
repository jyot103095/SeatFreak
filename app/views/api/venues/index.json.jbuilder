@venues.each do |venue|
  json.set! venue.id do
    json.extract! venue, :id, :name, :city, :address
    json.events venue.event_ids
  end
end
