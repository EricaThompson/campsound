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
class Story < ApplicationRecord
    validates :owner_id, presence: true
    validates :title, presence: true
    validates :story_type, presence: true
    validates :text, presence: true

    belongs_to :author,
        foreign_key: :owner_id,
        class_name: :User
end
