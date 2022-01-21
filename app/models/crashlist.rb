class Crashlist < ApplicationRecord
    has_many :favoritesongs
    has_many :users, through: :favoritesongs
end
