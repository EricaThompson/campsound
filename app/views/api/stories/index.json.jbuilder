@stories.each do |story|
    json.set! story.id do
        json.id story.id
        json.title story.title
        json.author story.owner_id
        json.username story.username
        json.summary story.summary
        json.type story.story_type 
        json.text story.text
        json.date story.created_at.strftime("%B %d, %Y")
    end
end