json.set! @user.id do
  json.id @user.id
  json.email @user.email
  json.fName @user.f_name
  json.lName @user.l_name
end
