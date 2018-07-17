json.performers do
  @performers.each do |performer|
    json.set! performer.id do
      json.extract! performer, :id, :name, :category, :classification
      json.eventIds performer.event_ids
    end
  end
end

json.events({})
json.events do
  @performers.each do |performer|
    performer.events.each do |event|
      json.set! event.id do
        json.extract! event, :id, :title
        json.eventOn event.event_on.localtime.strftime("%a %b %e at %l:%M %p")
      end
    end
  end
end
