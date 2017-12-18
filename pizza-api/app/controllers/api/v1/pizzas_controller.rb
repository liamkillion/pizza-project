class Api::V1::PizzasController < ApplicationController

  def index
    pizzaList= Pizza.all
    pizzas = []
    pizzaList.each do |pizza|
      pizzas << pizza
    end
    render json: pizzas
  end

  def show
    @pizza = Pizza.find(parmas[:id])
  end

  def new
    @pizza = Pizza.new
  end

  def edit
    @pizza = Pizza.find(parmas[:id])
  end

  def create
    @pizza = Pizza.new(pizza_params)
    @pizza.user_id=params[:user_id]

      if @pizza.save
        redirect_to pizza_path(@pizza)

      else
        render :new

      end
  end

  # PATCH/PUT /pizzas/1
  # PATCH/PUT /pizzas/1.json
  def update
  @pizza = Pizza.find(params[:id])
    if @pizza.update(pizza_params)
      redirect_to pizza_path(@pizza)
    else
      render :edit
    end
  end

end
