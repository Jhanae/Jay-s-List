class ProductsController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

    def index
        product = Product.all
        render json: product
    end

    def show
        product = Product.find_by(id: params[:id])
        if product
            render json: product
        else
            render json: { "error:" => "Product not found"}, status: :not_found
        end
    end

    private
    # def render_not_found
    #     render json: { "error:" => "Product not found"}, status: :not_found
    # end

end
