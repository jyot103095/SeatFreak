# == Schema Information
#
# Table name: events
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#  event_on   :datetime         not null
#  venue_id   :integer          not null
#

class Event < ApplicationRecord
  validates :title, :venue_id, :event_on, presence: true
  include PgSearch
  multisearchable :against => [:title]

  belongs_to :venue

  has_many :tickets

  has_many :event_performers

  has_many :performers,
    through: :event_performers,
    source: :performer
end
