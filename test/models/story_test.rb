# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  story_type :string           not null
#  title      :string           not null
#  owner_id   :integer          not null
#  story      :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class StoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
