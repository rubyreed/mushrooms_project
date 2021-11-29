class MushroomsController < ApplicationController

def app
  render component: "App"
end

def index
  render json: Mushroom.all
end

def create
  @mushroom = Mushroom.new(mushroom_params)
  if (@mushroom.save)
  render json: @mushroom
  else
  render json: {errors: @mushroom.errors.full_messages}, status: 422
  end
  end
  
private

def mushroom_params
params.require(:mushroom).permit(:variety, :color, :usage)
end


end
