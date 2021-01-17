json.extract! @story, :id, :owner_id, :title, :text
# json.song url_for(@story.song)
# json.cover url_for(@story.cover)
json.date @story.created_at.strftime("%B %d, %Y")