require 'spec_helper'

describe LambsController do

  describe "GET 'index' " do
    before do
      get :index
    end

    it { should respond_with(:success) }

    it { should render_template(:index) }

    it "assigns all lambs as @lambs" do
      lamb = Lamb.create
      get :index
      expect(assigns(:lambs)).to match_array([lamb])
    end

  end

  describe "GET 'create' " do
    before do
      json = { :format => 'json', :lamb => {} }
      post :create, json
    end

    it { should respond_with(:success) }

    it "responds with the newly created lamb as json" do
      expect(response.body).to eq(assigns(:lamb).to_json)
    end
  end

  describe "PUT 'update'" do
    before do
      lamb = Lamb.create
      lamb.is_silent = false
      json = { :format => 'json', id: lamb.id, :lamb => lamb }
      put :update, json
      end

    it { should respond_with(:success) }

    it "finds the lamb and wakes it up in the db" do
      expect(Lamb.last.is_silent).to be_false
    end

    it "responds with the updated lamb as json" do
      expect(response.body).to eq(assigns(:lamb).to_json)
    end
  end
end
