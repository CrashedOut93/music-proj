class FavoritestationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :radio_id
  belongs_to :radio
end
