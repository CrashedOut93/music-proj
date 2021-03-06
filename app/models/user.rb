class User < ApplicationRecord
    has_secure_password

    has_many :favoritestations
    has_many :radios, through: :favoritestations

    has_many :favoritesongs
    has_many :crashlists, through: :favoritesongs


    validates :username, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
end
