class User < ApplicationRecord
    validates :email, presence: true
    validates :password, length: { minimum: 8 }
    has_secure_password
    #validate caps for password

    has_one :profile, dependent: :destroy
end
