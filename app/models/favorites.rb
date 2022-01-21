class favorites < ApplicationRecord
  belongs_to :crashlists
  belongs_to :radio
  belongs_to :user_id
end
