class Api::V1::ToppingsController < ApplicationController

  def index
    @toppings = Topping.all
  end

  def show
    @topping = Topping.find(parmas[:id])
  end

  def new
    @topping = Topping.new
  end

  def edit
    @topping = Topping.find(parmas[:id])
  end

  def create
    @topping = Topping.new(topping_params)
    @topping.user_id=params[:user_id]

      if @topping.save
        redirect_to topping_path(@topping)

      else
        render :new

      end
  end

  def update
  @topping = Topping.find(params[:id])
    if @topping.update(topping_params)
      redirect_to topping_path(@topping)
    else
      render :edit
    end
  endend

end
