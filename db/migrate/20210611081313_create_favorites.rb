class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.string :guest_id
      t.string :manufacturer_id
      t.string :rename

      t.timestamps
    end
  end
end
