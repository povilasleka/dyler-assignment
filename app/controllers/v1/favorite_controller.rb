module V1
    class FavoriteController < ApplicationController
        # GET /v1/favorite/{:guest_id}
        def show
            favorites = Favorite.where(guest_id: params[:id])
            render json: { status: 'SUCCESS', data: favorites }, status: :ok
        end

        # POST /v1/favorite
        def create
            favorite = Favorite.create(favorite_params)

            if favorite.save
                render json: { status: 'SUCCESS', data: favorite }, status: :created
            else
                render json: { status: 'ERROR', data: favorite.errors }, status: :unprocessable_entry
            end
        end

        # DELETE /v1/favorite/{:id}
        def destroy
            Favorite.find(params[:id]).destroy

            head :no_content 
        end

        # PUT /v1/favorite/{:id}
        def update 
            Favorite.find(params[:id]).update(favorite_params)

            head :no_content
        end

        private

        def favorite_params
            params.permit(:guest_id, :manufacturer_id, :name, :country)
        end
    end
end
