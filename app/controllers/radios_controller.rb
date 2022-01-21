class RadiosController < ApplicationController
    def index
        render json: Radio.all
    end

    def show
        radio = Radio.find(params[:id])
        render json: radio, status: :ok
    end 
end
