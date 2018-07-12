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

require 'test_helper'

class PerformerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
