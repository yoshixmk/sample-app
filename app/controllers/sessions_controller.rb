class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      # ユーザーをサインインさせ、ユーザーページ (show) にリダイレクトする。
    else
      flash[:error] = 'Invalid email/password combination' # 誤りあり!
      render 'new'
    end
  end

  def destroy
  end
end
