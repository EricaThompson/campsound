export const createStory = (userId, story) => (
    $.ajax({
        url: `/api/users/${userId}/stories`,
        method: 'POST',
        data: story,
        // contentType: false,
        // processData: false
    })
)

export const readStory = (storyId) => (
    $.ajax({
        url: `/api/stories/${storyId}`,
        method: 'GET'
    })
)

export const readAllStories = () => (
    $.ajax({
        url: `/api/stories`,
        method: 'GET'
    })
)

