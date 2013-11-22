require 'spec_helper'

describe Lamb do

  context "when newly created" do
    let(:lamb) { Lamb.new }
    it "is_silent defaults to true" do
      expect(lamb.is_silent).to be_true
    end
  end
end
