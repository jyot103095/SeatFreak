# == Schema Information
#
# Table name: venues
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  city        :string           not null
#  address     :string           not null
#  description :string
#  latitude    :float
#  longitude   :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Venue < ApplicationRecord
  validates :name, :city, :address, presence: true
  include PgSearch
  multisearchable :against => [:name]


  has_many :events
  has_one_attached :photo
end
