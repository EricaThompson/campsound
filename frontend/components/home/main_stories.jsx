import React from 'react';
// import { Link } from 'react-router-dom';
import * as StoryAPIUtil from '../../util/stories_api_util';
import { withRouter } from 'react-router'


class MainStories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
        }
    }


    componentDidMount() {


        StoryAPIUtil.fetchAllStories()
            .then(res => this.setState({
                stories: Object.values(res)
            }))

    }


    render() {

        // console.log(this.state.stories)


        let summary0;
        let type1;
        let type2;
        let type3;

        if (this.state.stories.length > 1) {
            let summaryItems = this.state.stories
            summary0 = summaryItems[0].summary
            type1 = summaryItems[1].type
            type2 = summaryItems[2].type
            type3 = summaryItems[3].type
        }
        
        let storyZeroTitle;
        let storyOneTitle;
        let storyTwoTitle;
        let storyThreeTitle;

        if (this.state.stories.length > 0) {
            storyZeroTitle = this.state.stories[0].title
            storyOneTitle = this.state.stories[1].title
            storyTwoTitle = this.state.stories[2].title
            storyThreeTitle = this.state.stories[3].title
        } 

        return (
            <div className='stories-home-container'>
                <div className="stories">
                    <div
                        onClick={() => this.props.history.push(`/users/${this.state.stories.reverse()[0].owner_id}/stories/${this.state.stories.reverse()[0].id}`)}
                        className="main link">
                        <p>{storyZeroTitle}</p>
                        <h6>{summary0}</h6>
                        <button className="read-more">read more <span>    </span>  <span className="arrow">      ➝</span></button>
                        <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-main.jpg" alt="blue flowers" />
                    </div>

                    <div className="side link">
                        <div
                            onClick={() => this.props.history.push(`/users/${this.state.stories.reverse()[1].owner_id}/stories/${this.state.stories.reverse()[1].id}`)}
                            className='set'>
                            <p>{storyOneTitle}</p>
                            <h6>{type1}</h6>
                            <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-side-top.jpg" alt="koi fish" />
                        </div>
                        <div
                            onClick={() => this.props.history.push(`/users/${this.state.stories.reverse()[2].owner_id}/stories/${this.state.stories.reverse()[2].id}`)}
                            className='set'>
                            <p>{storyTwoTitle}</p>
                            <h6>{type2}</h6>
                            <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-side-middle.jpg" alt="turquoise sand" />
                        </div>
                        <div
                            onClick={() => this.props.history.push(`/users/${this.state.stories.reverse()[3].owner_id}/stories/${this.state.stories.reverse()[3].id}`)}
                            className='set bottom'>
                            <p>{storyThreeTitle}</p>
                            <h6>{type3}</h6>
                            <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-side-bottom.jpg" alt="waves in water" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default withRouter(MainStories);