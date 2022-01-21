class FavoritestationsController < ApplicationController
    def create 
        params[:user_id]=current_user.id
        params[:radio_id]=params["id"]
        favoritestations = Favoritestation.create!(favoritestations_params)
        render json: favoritestations, status: :ok
    end

    def destroy 
        favoritestation = Favoritestation.find(params[:id])
        favoritestation.destroy
        render json: {}
        head :no_content
    end

    def index 
        favoritestations = current_user.favoritestations
        render json: favoritestations
    end 

    private
    def favoritestations_params
        params.permit(:user_id, :radio_id)
    end
    
end
