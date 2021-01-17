@stories.each do |story|
    json.set! story.id do
        json.id story.id
        json.title story.title
        json.author story.owner_id
        json.text story.text
        json.date story.created_at.strftime("%b %Y")
    end
end