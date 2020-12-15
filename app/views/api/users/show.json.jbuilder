json.extract! @user, :id, :username, :type, :link, :bio, :location
# json.extract! @items, :id, :title, :cover, :song

# json.set

# json.id @clip.id
# json.user_id @clip.user_id
# json.category @clip.category
# json.title @clip.title
# json.video_clip url_for(@clip.video_clip)

# @categories.each do |category|
#     json.set! category.id do
#         json.id category.id
#         json.title category.title
#         json.image url_for(category.image)
#     end
# end

json.array! @items do |item|
    json.id item.id
    json.owner_id item.owner_id
    json.cover item.cover
    json.title item.title
    json.cover url_for(item.cover)
    json.song url_for(item.song)
end


# if @user.user_img.present?
#     json.userImg url_for(@user.user_img)
# end
# json.userImg(url_for(@user.user_img)) if !@user.user_img.present?
# json.userImg url_for(@user.user_img)

# json.array! @items

# json.song(url_for(@i))






# json.start_time(plan.start_time.strftime("%I:%M %p") if !plan.start_time.present?)
