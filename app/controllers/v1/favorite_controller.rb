module V1
    class FavoriteController < ApplicationController
        # GET /v1/favorite
        def index
            favorites = Favorite.all
            render json: { status: 'SUCCESS', data: favorites }, status: :ok
        end

        # GET /v1/favorite/:guest_id
        def show
            favorites = Favorite.where(guest_id: params[:id])
            render json: { status: 'SUCCESS', data: favorites }, status: :ok
        end

        # POST /v1/favorite
        def create
            favorite = Favorite.create(favorite_params)

            if favorite.save
                render json: { status: 'SUCCESS', data: favorite }, status: :ok
            else
                render json: { status: 'ERROR', data: favorite.errors }, status: :unprocessable_entry
            end
        end

        private

        def favorite_params
            params.permit(:guest_id, :manufacturer_id, :rename)
        end
    end
end
