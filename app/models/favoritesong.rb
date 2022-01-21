class Favoritesong < ApplicationRecord
    belongs_to :crashlist
    belongs_to :user
end
