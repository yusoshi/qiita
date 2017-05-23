class FeedsController < ApplicationController
  # ユーザーがログインしていない場合、ログインページにリダイレクト
  before_action :move_to_login_page

  def index
  end

  private
  def move_to_login_page
    unless user_signed_in?
      redirect_to  new_user_session_path
    end
  end
end
