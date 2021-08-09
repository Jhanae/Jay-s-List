class Product < ApplicationRecord
    validates :name, :presence => true
    validates :price, :presence => true

    has_many :cart_items
    has_many :profiles, through: :cart_items
end
