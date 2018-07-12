# == Schema Information
#
# Table name: events
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#  event_on   :datetime         not null
#

class Event < ApplicationRecord
  validates :title, :event_on, presence: true

  has_many :tickets

  has_many :event_performers

  has_many :performers,
    through: :event_performers,
    source: :performer
end
