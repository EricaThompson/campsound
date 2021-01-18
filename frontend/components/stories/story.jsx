import React from 'react';
import { Link } from 'react-router-dom';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: []
        }
    }

    componentDidMount() {
        $.ajax({
            url: `/api/users/${this.props.match.params.authorId}/stories/${this.props.match.params.storyId}`,
            method: 'GET'
        }).then(res => this.setState({story: res}))

    }

    render() {
        console.log(this.state.story)
        
        return (
            <div className="story-show" key={() => Math.random()}>
                <div className='stories-nav'>
                    <h1 onClick={() => this.props.history.replace('/stories')}>Campsound Daily</h1>
                    <ul>
                        <li>
                            <span onClick={() => this.props.history.replace('/stories')}>stories</span> · view all
                        </li>

                    </ul>
                </div>
                <div className='story-show-type'>{this.state.story.story_type}</div>
                <div className='story-show-title'>{this.state.story.title}</div>
                <div className='story-show-summary'>{this.state.story.summary}</div>
                <div className='story-show-author'>By <span className="author" onClick={() => this.props.history.replace(`/artists/${this.state.story.owner_id}`)}>{this.state.story.owner_id}</span> · {this.state.story.date}</div>
                <div className='story-show-img'><img src="https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=620" alt=""/></div>
                <div className='story-show-text'>{this.state.story.text}</div>
            </div>
        )
    }
}


export default Story;