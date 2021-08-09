class CartItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        cart = CartItem.all
        render json: cart
    end
    
    def create
        cart = CartItem.create(cart_params)
            render json: cart, status: :created
   
    end

    def show
        cart = CartItem.find_by(id: params[:id])
        if cart.valid?
            render json: cart
        else
            render json: {"error:" => cart.errors.full_messages} 
        end  
    end

    def update
        cart = CartItem.find_by(id: params[:id])
        
        if cart
            cart.update(cart_params)
            render json: cart
        else
            render json: {"error:" => "Cart not found"} 
        end  
    end

    def destroy
        cart = CartItem.find_by(id: params[:id])
        cart.destroy

        # head: no_content            
        # c1 = CartItem.find_by(profile_id: 10, product_id: 3)
    end


    private
    def cart_params
        params.permit(:product_id, :profile_id)
    end
    
    def render_not_found(invalid)
        render json: { "error:" => "cart not found"}, status: :not_found
    end
end


