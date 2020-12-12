json.extract! @user, :id, :username, :type, :link, :bio, :location

json.userImg url_for(@user.user_img)