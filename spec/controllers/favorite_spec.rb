require 'rails_helper'

describe 'Favorite API', type: :request do
    describe 'GET /favorite' do
        it 'returns favorite manufacturers' do
            get '/v1/favorite/guest_id'
            expect(response).to have_http_status(:success)
        end
    end

    describe 'POST /favorite' do
        it 'creates a new favorite manufacturer' do
            expect {
                post '/v1/favorite', params: {
                    guest_id: 'guest_id_1',
                    manufacturer_id: '995',
                    name: 'Favorite1',
                    country: 'UK'
                }
            }.to change { Favorite.count }.from(0).to(1)

            expect(response).to have_http_status(:created)
        end
    end
end