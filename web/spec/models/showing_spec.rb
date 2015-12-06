require 'rails_helper'

describe Showing do
  before { @showing = Showing.new(time: Time.current)}

  subject { @showing }

  describe "validations" do
  	describe 'when the time is not present' do
  		before { @showing.time = nil }
  		it { should_not be_valid }
  	end
  end
end
