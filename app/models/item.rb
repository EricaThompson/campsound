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
class Item < ApplicationRecord
    validates :owner_id, presence: true
    validates :title, presence: true, uniqueness: true
    validates :released, presence: true, inclusion: [true, false]

    belongs_to :user,
        foreign_key: :owner_id,
        class_name: :User
end