class CreateRadios < ActiveRecord::Migration[6.1]
  def change
    create_table :radios do |t|
      t.string :img
      t.string :name
      t.text :uri
      t.integer :channel_id
      t.string :countryCode
      t.string :genre

      t.timestamps
    end
  end
end
