class CreateFavoritesongs < ActiveRecord::Migration[6.1]
  def change
    create_table :favoritesongs do |t|
      t.integer :user_id
      t.integer :crashlist_id

      t.timestamps
    end
  end
end
