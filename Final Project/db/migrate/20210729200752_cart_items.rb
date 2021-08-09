class CartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.integer :product_id
      t.integer :profile_id
      
      t.timestamps
    end
  end
end
