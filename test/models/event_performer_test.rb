# == Schema Information
#
# Table name: event_performers
#
#  id           :bigint(8)        not null, primary key
#  event_id     :integer          not null
#  performer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class EventPerformerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
