class HomepageController < ApplicationController
  def index
  end

  # Display image from images folder to the homepage
    def show
        @image = Image.find(params[:id])
    end

end
