# == Schema Information
#
# Table name: event_performers
#
#  id           :bigint(8)        not null, primary key
#  event_id     :integer          not null
#  performer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class EventPerformer < ApplicationRecord
  validates :performer_id, :event_id, presence: true

  belongs_to :performer

  belongs_to :event
end
