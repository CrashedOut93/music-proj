class CreateFavoritestations < ActiveRecord::Migration[6.1]
  def change
    create_table :favoritestations do |t|
      t.integer :user_id
      t.integer :radio_id

      t.timestamps
    end
  end
end
