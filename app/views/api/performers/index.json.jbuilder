@performers.each do |performer|
  json.set! performer.id do
    json.extract! performer, :id, :name, :category, :classification
    json.events performer.event_ids
  end
end
