# == Schema Information
#
# Table name: items
#
#  id            :bigint           not null, primary key
#  owner_id      :integer          not null
#  title         :string           not null
#  genre         :string
#  price         :string
#  released      :boolean          not null
#  about         :text
#  collection_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
