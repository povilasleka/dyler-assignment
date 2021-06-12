require "test_helper"

module V1
  class FavoriteControllerTest < ActionDispatch::IntegrationTest
    test "show should return success" do
      get "/v1/favorite/{guest_id}"
      assert_response :success
    end

    test "create should return success" do
      post "/v1/favorite", params: { guest_id: "ID", manufacturer_id: 955, name: "BMW", country: "Germany" }
      assert_response :success
    end
  end
end
