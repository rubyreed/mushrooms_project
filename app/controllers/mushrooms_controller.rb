class MushroomsController < ApplicationController
  before_action :set_mushroom, only: [:show, :update, :destroy]

def app
  render component: "App"
end

def index
  render json: Mushroom.all
end

# don't have show because it's just a single page app

def create
  @mushroom = Mushroom.new(mushroom_params)
  if (@mushroom.save)
  render json: @mushroom
  else
  render json: {errors: @mushroom.errors.full_messages}, status: 422
  end
  end
  
def destroy
  render json: @mushroom.destroy
end

private

def set_mushroom
  @mushroom=Mushroom.find(params[:id])
end

def mushroom_params
params.require(:mushroom).permit(:variety, :color, :usage)
end


end
