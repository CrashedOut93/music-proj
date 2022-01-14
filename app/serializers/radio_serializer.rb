class RadioSerializer < ActiveModel::Serializer
  attributes :id, :img, :name, :uri, :channel_id, :countryCode, :genre
end
