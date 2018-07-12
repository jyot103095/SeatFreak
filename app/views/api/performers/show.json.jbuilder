json.performers do
  json.extract! @performer, :id, :name, :classification, :category, :description
  json.eventsIds @performer.event_ids
end

json.events do
  @performer.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title
      json.time event.event_on.to_s(:time)
      json.date event.event_on.to_s(:date)
      json.performerIds event.performer_ids
    end
  end
end
