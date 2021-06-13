require 'rails_helper'

describe V1::FavoriteController, type: :request do
    describe 'GET /favorite' do
        it 'returns success status' do
            get '/v1/favorite/guest_id'
            expect(response).to have_http_status(:success)
        end

        it 'returns data with manufacturers list' do
            FactoryBot.create(:favorite)

            get '/v1/favorite/guest_id'

            parsed_response = JSON.parse(response.body)

            expect(parsed_response['data'].length).to eq(1)
        end
    end

    describe 'POST /favorite' do
        params = {
            guest_id: 'guest_id_1',
            manufacturer_id: '995',
            name: 'Favorite1',
            country: 'UK'
        }

        it 'returns a created response' do 
            post '/v1/favorite', params: params

            expect(response).to have_http_status(:created)
        end

        it 'creates a new favorite manufacturer' do
            expect {
                post '/v1/favorite', params: params
            }.to change { Favorite.count }.from(0).to(1)
        end
    end

    describe 'DELETE /favorite' do
        it 'returns no content response' do
            
        end
    end
end