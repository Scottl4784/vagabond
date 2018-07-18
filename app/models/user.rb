class User < ApplicationRecord
    has_many :cities, dependent: :destroy
    has_many :reviews, dependent: :destroy
end
