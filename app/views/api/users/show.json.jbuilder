json.extract! @user, :id, :username, :type, :link, :bio, :location

if @user.user_img.present?
    json.userImg url_for(@user.user_img)
end