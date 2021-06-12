class AddVarcharSizeLimits < ActiveRecord::Migration[6.1]
  def change
    change_column :favorites, :guest_id, :string, :limit => 36
    change_column :favorites, :rename, :string, :limit => 50
  end
end
