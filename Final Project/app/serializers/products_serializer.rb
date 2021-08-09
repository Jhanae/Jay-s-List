class ProductsSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :image
  has_many :cart_items
end
