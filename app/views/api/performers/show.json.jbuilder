json.performers do
  json.set! @performer.id do
    json.extract! @performer, :id, :name, :type, :category, :description
    json.eventsIds @performers.event_ids
  end
end

json.events do
  @performer.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title, :date, :time
      json.performerIds event.performer_ids
    end
  end
end
