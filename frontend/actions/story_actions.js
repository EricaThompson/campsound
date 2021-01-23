import * as StoryAPIUtil from '../util/stories_api_util';

export const READ_ALL_STORIES = 'READ_ALL_STORIES';
export const READ_ALL_USER_STORIES = 'READ_ALL_USER_STORIES';

const readAllStories = (items) => ({
    type: READ_ALL_STORIES,
    items
})

const readAllUserStories = (items) => ({
    type: READ_ALL_USER_STORIES,
    items
})

export const readAllStories = () => dispatch => {
    return StoryAPIUtil.fetchAllStories()
        .then(res => dispatch(readAllStories(res)))
}

export const readAllUserStories = (userId) => dispatch => {
    return ItemAPIUtil.fetchAllUserStories(userId)
        .then(res => dispatch(readAllUserStories(res)))
}