class Api::BooksController < ApplicationController
  def show
    @book = Book.find(params[:id])
    render 'show', formats: 'json', handlers: 'jbuilder'
  end

  def index
    @books = Book.all
    render 'index', formats: 'json', handlers: 'jbuilder'
  end
end
