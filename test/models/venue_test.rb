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

require 'test_helper'

class VenueTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
