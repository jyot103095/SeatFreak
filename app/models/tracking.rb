class Tracking < ApplicationRecord
	validates :user_id, :item_id, :item_type, presence: true

	belongs_to :trackable, polymorphic: true

	belongs_to :user

end
