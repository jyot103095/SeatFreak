class Tracking < ApplicationRecord
	validates :user_id, uniqueness: { scope: [:trackable_type, :trackable_id] } 
	validates :trackable_id, :trackable_type, presence: true

	belongs_to :trackable, polymorphic: true

	belongs_to :user

end
