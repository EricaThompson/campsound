export const createStory = (userId, story) => (
    $.ajax({
        url: `/api/users/${userId}/stories`,
        method: 'POST',
        data: story,
        // contentType: false,
        // processData: false
    })
)

export const readStory = (authorId, storyId) => (
    $.ajax({
        url: `/api/users/${authorId}/stories/${storyId}`,
        method: 'GET'
    })
)

export const readAllStories = () => (
    $.ajax({
        url: `/api/stories`,
        method: 'GET'
    })
)

export const updateStory = (authorId, story) => {
    // console.log(story.story.id)
    return $.ajax({
        url: `/api/users/${authorId}/stories/${story.story.id}`,
        method: 'PATCH',
        data: story
    })
}

export const deleteStory = (authorId, storyId) => {
    // console.log(story.story.id)
    return $.ajax({
        url: `/api/users/${authorId}/stories/${storyId}`,
        method: 'DELETE'
    })
}




