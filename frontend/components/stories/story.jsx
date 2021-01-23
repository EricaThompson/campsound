import React from 'react';
// import { Link } from 'react-router-dom';
import * as StoryAPIUtil from '../../util/stories_api_util';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: [],
            review: "https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=620",
            news: "https://images.pexels.com/photos/1022928/pexels-photo-1022928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=620",
        }
    }

    componentDidMount() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        $.ajax({
            url: `/api/users/${this.props.match.params.authorId}/stories/${this.props.match.params.storyId}`,
            method: 'GET'
        }).then(res => this.setState({ story: res }))
        

    }

    render() {
        // console.log(this.state.story)
        let editBtn;
        let deleteBtn;
        
        if (this.state.story.owner_id === this.props.currentUserId){
            editBtn = <button 
                            onClick={()=>this.props.history.replace(`/users/${this.state.story.owner_id}/stories/${this.state.story.id}/edit`)}
                            className="edit"
                        >
                            edit
                        </button>
            deleteBtn = <button
                onClick={() => {
                    StoryAPIUtil.deleteStory(this.props.currentUserId, this.state.story.id )
                    this.props.history.replace(`/stories`)
                } }
                            className="delete"
                        >
                            delete
                        </button>

        }

        let img;

        if (this.state.story.story_type === "news"){
            img = this.state.news
        } else {
            img = this.state.review
        }
        
        return (
            <div className="story-show" key={() => Math.random()}>
                <div className='stories-nav'>
                    <h1 
                        className='link'
                        onClick={() => this.props.history.replace('/stories')}>Campsound Daily</h1>
                    <ul>
                        <li>
                            <span onClick={() => this.props.history.replace('/stories')}>stories</span> · view all
                        </li>

                    </ul>
                </div>
                <div>{editBtn}</div>
                <div>{deleteBtn}</div>
                <div className='story-show-type'>{this.state.story.story_type}</div>
                <div className='story-show-title'>{this.state.story.title}</div>
                <div className='story-show-summary'>{this.state.story.summary}</div>
                <div className='story-show-author'>By <span className="author" onClick={() => this.props.history.replace(`/artists/${this.state.story.owner_id}/stories`)}>{this.state.story.username}</span> · {this.state.story.date}</div>
                <div className='story-show-img'><img src={img} alt=""/></div>
                <div className='story-show-text'>{this.state.story.text}</div>
            </div>
        )
    }
}


export default Story;