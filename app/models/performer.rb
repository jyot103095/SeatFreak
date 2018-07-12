# == Schema Information
#
# Table name: performers
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  type        :string           not null
#  category    :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Performer < ApplicationRecord
  validates :name, :type, :category, presence: true
  validates :type, inclusion: { in: %w(Sports Music) }

  has_many :events
end
