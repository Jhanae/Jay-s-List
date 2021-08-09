class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :location, :bio, :gender, :profile_picture
  has_many :cart_items
  belongs_to :user
  has_many :products
end
