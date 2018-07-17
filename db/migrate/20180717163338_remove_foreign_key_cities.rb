class RemoveForeignKeyCities < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :cities, :users
  end
end
