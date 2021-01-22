@users.each do |user|
    json.set! user.id do
        json.link user.link
        json.bio user.bio
        json.location user.location
        json.userImg url_for(user.user_img)
    end
end