class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :image
      t.string :email_id
      t.string :passphrase

      t.timestamps
    end
  end
end
