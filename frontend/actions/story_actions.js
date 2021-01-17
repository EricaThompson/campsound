import * as StoryAPIUtil from '../util/stories_api_util';

export const READ_ALL_STORIES = 'READ_ALL_STORIES';

const readAllStories = (stories) => ({
    type: READ_ALL_STORIES
})