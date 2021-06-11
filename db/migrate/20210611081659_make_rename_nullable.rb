class MakeRenameNullable < ActiveRecord::Migration[6.1]
  def change
    change_column_null :favorites, :rename, false
  end
end
