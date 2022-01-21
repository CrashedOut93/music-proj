class Radio < ApplicationRecord
    has_many :favoritestations
    has_many :users, through: :favoritestations
end
