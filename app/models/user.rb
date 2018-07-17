class User < ApplicationRecord
    has_many :cites, dependent: :destroy
    has_many :reviews, dependent: :destroy
end
