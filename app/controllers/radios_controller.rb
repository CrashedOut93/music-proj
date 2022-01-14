class RadiosController < ApplicationController
    def index
        render json: Radio.all
    end

    
end
