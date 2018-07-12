class EventPerformer < ApplicationRecord
  validates :performer_id, :event_id, presence: true

  belongs_to :performer

  belongs_to :event
end
