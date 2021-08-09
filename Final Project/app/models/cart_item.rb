class CartItem < ApplicationRecord
    validates :product_id, presence: true
    validates :profile_id, presence: true

    belongs_to :profile
    belongs_to :product
end
