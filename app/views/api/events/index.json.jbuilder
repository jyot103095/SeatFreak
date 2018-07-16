json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title
      json.eventOn event.event_on.localtime.strftime("%a %b %e at %l:%M %p")
      json.performers event.performer_ids
    end
  end
end

json.performers do
  @events.each do |event|
    event.performers.each do |performer|
      json.set! performer.id do
        json.extract! performer, :id, :name, :category, :classification
      end
    end
  end
end
