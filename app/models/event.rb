# == Schema Information
#
# Table name: events
#
#  id         :bigint(8)        not null, primary key
#  date       :date             not null
#  time       :time             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#

class Event < ApplicationRecord
  validates :title, :date, :time, presence: true

  has_many :tickets

end
