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



        return (
            <div className='stories-home-container'>
                <div className="stories">
                    <div
                        onClick={() => this.props.history.push(`/users/${this.state.stories.reverse()[0].owner_id}/stories/${this.state.stories.reverse()[0].id}`)}
                        className="main link">
                        <p>The Forest Through the Trees</p>
                        <h6>{summary0}</h6>
                        <button className="read-more">read more</button>
                        <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-main.jpg" alt="blue flowers" />
                    </div>

                    <div className="side link">
                        <div
                            onClick={() => this.props.history.push(`/users/${this.state.stories.reverse()[1].owner_id}/stories/${this.state.stories.reverse()[1].id}`)}
                            className='set'>
                            <p>Gold is in Bloom</p>
                            <h6>{type1}</h6>
                            <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-side-top.jpg" alt="tan flowers" />
                        </div>
                        <div
                            onClick={() => this.props.history.push(`/users/${this.state.stories.reverse()[2].owner_id}/stories/${this.state.stories.reverse()[2].id}`)}
                            className='set'>
                            <p>Piece by Piece</p>
                            <h6>{type2}</h6>
                            <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-side-middle.jpg" alt="pink and blue flowers" />
                        </div>
                        <div
                            onClick={() => this.props.history.push(`/users/${this.state.items.reverse()[3].owner_id}/stories/${this.state.stories.reverse()[3].id}`)}
                            className='set bottom'>
                            <p>Petals All Around</p>
                            <h6>{type3}</h6>
                            <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-side-bottom.jpg" alt="flower petals and leaves" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default withRouter(MainStories);