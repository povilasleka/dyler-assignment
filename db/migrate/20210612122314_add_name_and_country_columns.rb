class AddNameAndCountryColumns < ActiveRecord::Migration[6.1]
  def change
    rename_column :favorites, :rename, :name

    change_table :favorites do |t|
      t.string :country, :limit => 50
    end
  end
end
