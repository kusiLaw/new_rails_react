class MessagesController < ApplicationController
  def index; end

  def greetings
    message = Message.order('RANDOM()').first
    render json: { data: message.msg }
  end
end
