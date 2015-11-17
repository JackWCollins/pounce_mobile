class Api::V1::ShowingsController < ApplicationController
  before_action :set_showing, only: [:show, :update, :destroy]

  # GET /showings
  # GET /showings.json
  def index
    @showings = Showing.all

    render json: @showings
  end

  # GET /showings/1
  # GET /showings/1.json
  def show
    render json: @showing
  end

  # POST /showings
  # POST /showings.json
  def create
    @showing = Showing.new(showing_params)

    if @showing.save
      render json: @showing, status: :created, location: @showing
    else
      render json: @showing.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /showings/1
  # PATCH/PUT /showings/1.json
  def update
    @showing = Showing.find(params[:id])

    if @showing.update(showing_params)
      head :no_content
    else
      render json: @showing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /showings/1
  # DELETE /showings/1.json
  def destroy
    @showing.destroy

    head :no_content
  end

  private

    def set_showing
      @showing = Showing.find(params[:id])
    end

    def showing_params
      params.require(:showing).permit(:time)
    end
end
