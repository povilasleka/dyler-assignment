class MakeGuestIdAndManufacturerIdNotNullable < ActiveRecord::Migration[6.1]
  def change
    change_column_null(:favorites, :manufacturer_id, false)
    change_column_null(:favorites, :guest_id, false)
  end
end
