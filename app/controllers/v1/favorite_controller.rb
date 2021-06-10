module V1
    class FavoriteController < ApplicationController
        # GET /v1/favorite
        def index
            favorite_entries = FavoriteEntry.all
            render json: { status: 'SUCCESS', data: favorite_entries }, status: :ok
        end

        # GET /v1/favorite/:guest_id
        def show
            favorite_entries = FavoriteEntry.where(guest_id: params[:id])
            render json: { status: 'SUCCESS', data: favorite_entries }, status: :ok
        end

        # POST /v1/favorite
        def create
            favorite_entry = FavoriteEntry.create(favorite_params)

            if favorite_entry.save
                render json: { status: 'SUCCESS', data: favorite_entry }, status: :ok
            else
                render json: { status: 'ERROR', data: favorite_entry.errors }, status: :unprocessable_entry
            end
        end

        private

        def favorite_params
            params.permit(:guest_id, :vehicle_mfr_id)
        end
    end
end
