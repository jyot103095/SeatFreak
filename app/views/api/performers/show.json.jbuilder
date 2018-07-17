json.performer do
  json.extract! @performer, :id, :name, :classification, :category, :description
  json.eventsIds @performer.event_ids
end

json.events({})
json.events do
  @performer.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title
      json.eventOn event.event_on.localtime.strftime("%a %b %e at %l:%M %p")
      json.performers event.performer_ids
    end
  end
end
