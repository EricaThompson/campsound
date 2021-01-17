json.extract! @story, :id, :owner_id, :title, :text
json.date @story.created_at.strftime("%B %d, %Y")