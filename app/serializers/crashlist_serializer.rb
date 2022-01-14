class CrashlistSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :img_src, :src
end
