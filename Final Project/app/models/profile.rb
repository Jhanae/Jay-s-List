class Profile < ApplicationRecord
    validates :user_id, uniqueness: true
    
    belongs_to :user
    has_many :cart_items
    has_many :products, through: :cart_items
end
