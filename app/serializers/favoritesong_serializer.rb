class FavoritesongSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :crashlist_id
end
