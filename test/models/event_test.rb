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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
