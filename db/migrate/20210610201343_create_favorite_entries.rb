class CreateFavoriteEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_entries do |t|
      t.string :guest_id
      t.references :manufacturer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
