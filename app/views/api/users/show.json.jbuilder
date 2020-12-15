json.extract! @user, :id, :username, :type, :link, :bio, :location

# @user.items.each do |item|
#     json.set! item.id do
#         json.id item.id
#         json.title item.title
#         # json.artist item.artist
#         json.cover url_for(item.cover)
#         json.song url_for(item.song)

#     end
# end

# json.extract! @items, :id, :title, :cover, :song

# json.array! @items do |item|
#     json.title item.title
#     # json.artist item.artist
#     # json.cover item.cover
#     json.id item.id
#     json.owner_id item.owner_id
#     json.cover url_for(item.cover)
#     # json.song url_for(item.song)
# end



# json.(@items, :id, :title)

# json.items @items.items, :title, :id, :owner_id

# json.attachments @items.attachments do |attachment|
#     json.file attachment.filename
#     json.cover url_for(attachment)
# end


# json.set

# json.id @items.id
# json.user_id @items.user_id
# json.category @items.category
# json.title @items.title

# json.content format_content(@items.each)

# json.array! @items do |item|
#     url_for(item.cover)
# end

# json.covers @items.each url_for(@items.cover)




# if @user.user_img.present?
#     json.userImg url_for(@user.user_img)
# end
# json.userImg(url_for(@user.user_img)) if !@user.user_img.present?
# json.userImg url_for(@user.user_img)

# json.array! @items

# json.song(url_for(@i))






# json.start_time(plan.start_time.strftime("%I:%M %p") if !plan.start_time.present?)
