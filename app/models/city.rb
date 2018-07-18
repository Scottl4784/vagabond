class City < ApplicationRecord
  has_many :reviews, dependent: :destroy
end
