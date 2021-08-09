class Profiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.string :username
      t.string :location
      t.string :bio
      t.string :gender
      t.string :profile_picture

      t.timestamps
    end
  end
end
