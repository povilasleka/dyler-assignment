FactoryBot.define do
    factory :favorite do
        manufacturer_id { "1" }
        guest_id { "guest_id" }
        name { "somename" }
        country { "uk" }
    end
end