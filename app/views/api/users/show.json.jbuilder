json.extract! @user, :id, :username, :type, :link, :bio, :location

# if @user.user_img.present?
#     json.userImg url_for(@user.user_img)
# end
# json.userImg(url_for(@user.user_img)) if !@user.user_img.present?
json.userImg(url_for(@user.user_img))






# json.start_time(plan.start_time.strftime("%I:%M %p") if !plan.start_time.present?)
