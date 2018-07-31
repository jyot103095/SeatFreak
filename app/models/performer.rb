# == Schema Information
#
# Table name: performers
#
#  id             :bigint(8)        not null, primary key
#  name           :string           not null
#  category       :string           not null
#  description    :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  classification :string           not null
#

class Performer < ApplicationRecord
  validates :name, :classification, :category, presence: true
  validates :classification, inclusion: { in: %w(Sports Music) }
  include PgSearch
  multisearchable :against => [:name]

  has_many :event_performers
  
  has_many :trackings, as: :trackable

  has_many :events,
    through: :event_performers,
    source: :event

  has_one_attached :photo
end
