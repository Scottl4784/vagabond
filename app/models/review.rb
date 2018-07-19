class Review < ApplicationRecord
  belongs_to :city
  belongs_to :user
  validates :title, length: { in: 1..100}, presence: true
end
