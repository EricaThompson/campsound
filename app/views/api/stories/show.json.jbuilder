json.extract! @story, :id, :owner_id, :title, :text, :story_type
json.date @story.created_at.strftime("%B %d, %Y")