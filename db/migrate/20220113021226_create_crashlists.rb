class CreateCrashlists < ActiveRecord::Migration[6.1]
  def change
    create_table :crashlists do |t|
      t.string :title
      t.string :artist
      t.string :img_src
      t.string :src

      t.timestamps
    end
  end
end
