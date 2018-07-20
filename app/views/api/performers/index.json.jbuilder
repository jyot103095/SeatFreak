@performers.each do |performer|
  json.set! performer.id do
    json.extract! performer, :id, :name, :category, :classification
    json.events performer.event_ids
    json.photoUrl url_for(performer.photo)
  end
end
