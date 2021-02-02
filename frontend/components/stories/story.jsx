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
            
            spinnerShow: false,
            nextStory: null,
            previousStory: null,
            currentIdx: null, 

        }
    }

    componentDidMount() {
        this.setState({spinnerShow: true})
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        // let nextIdx = this.props.match.params.storyId + 1
        // console.log(this.props.match.params.storyId)
        
        $.ajax({
            url: `/api/users/${this.props.match.params.ownerId}/stories/${this.props.match.params.storyId}`,
            method: 'GET'
        }).then(res => {
            this.setState({ story: res, currentIdx: res.id })
            this.setState({spinnerShow: false})
        })
        let idx = parseInt(this.props.match.params.storyId)
        // console.log('id',this.props.match.params.storyId)

        console.log(idx)
        $.ajax({
            url: `/api/stories/${idx + 1}`,
            method: 'GET'
        }).then(res => {
            this.setState({ previousStory: res })
            console.log('prev',this.state.previousStory)
            // this.setState({ spinnerShow: false })
        })

        let nextIdx = idx + 1
        console.log('nextidx', nextIdx) 

        $.ajax({
            url: `/api/stories/${idx - 1}`,
            method: 'GET'
        }).then(res => {
            this.setState({ nextStory: res })
            console.log('next:',this.state.nextStory)
            // this.setState({ spinnerShow: false })
        })




        

    }

    render() {
        // console.log(this.state.story)
        let editBtn;
        let deleteBtn;
        
        if (this.state.story.owner_id === this.props.currentUserId){
            editBtn = <button 
                            onClick={()=>this.props.history.push(`/users/${this.state.story.owner_id}/stories/${this.state.story.id}/edit`)}
                            className="edit"
                        >
                            edit
                        </button>
            deleteBtn = <button
                onClick={() => {
                    StoryAPIUtil.deleteStory(this.props.currentUserId, this.state.story.id )
                    this.props.history.push(`/stories`)
                } }
                            className="delete"
                        >
                            delete
                        </button>

        }

        let nextBtn;
        let previousBtn;

        if (this.state.nextStory && !this.state.previousStory){

            nextBtn = <i 
                            className="next-btn link fas fa-play next-solo"
                            onClick={
                            () => {
                                this.props.history.push(`/users/${this.state.story.owner_id}/stories/${this.state.nextStory.id}`)
                                window.location.reload()
                            }
                            }>
                        
                        </i>
                
        } else if (this.state.nextStory){
            nextBtn = <i
                className="next-btn link fas fa-play"
                onClick={
                    () => {
                        this.props.history.push(`/users/${this.state.story.owner_id}/stories/${this.state.nextStory.id}`)
                        window.location.reload()
                    }
                }>

            </i>
        }

        if (this.state.previousStory && !this.state.nextStory) {
            previousBtn = <i
                className="previous-btn link fas fa-play previous-solo"
                onClick={
                    () => {
                        this.props.history.push(`/users/${this.state.story.owner_id}/stories/${this.state.previousStory.id}`)
                        window.location.reload()
                    }
                }>

            </i>
            // </button>
        } else if (this.state.previousStory){
            previousBtn = <i
                className="previous-btn link fas fa-play"
                onClick={
                    () => {
                        this.props.history.push(`/users/${this.state.story.owner_id}/stories/${this.state.previousStory.id}`)
                        window.location.reload()
                    }
                }>

            </i>
        }

        let img;

        if (this.state.story.story_type === "news"){
            img = this.state.news
        } else {
            img = this.state.review
        }

        if (this.state.spinnerShow) {
            return (
                <div className="spinner">
                    <i className="fas fa-compass fa-spin"></i>
                    <p>Loading</p>
                    {/* <div className='spinner-space'></div> */}
                </div>
            )

        } else {
        
                return (
                    <div className="story-show" key={() => Math.random()}>
                        <div className='stories-nav'>
                            <h1 
                                className='link'
                                onClick={() => this.props.history.push('/page/stories')}>Campsound Daily</h1>
                            <ul>
                                <li>
                                    <span onClick={() => this.props.history.push('page/stories')}>stories</span> · view all
                                </li>

                            </ul>
                        </div>
                        <div>{editBtn}</div>
                        <div>{deleteBtn}</div>
                        <div className='story-show-type'>{this.state.story.story_type}</div>
                        <div className='story-show-title'>{this.state.story.title}</div>
                        <div className='story-show-summary'>{this.state.story.summary}</div>
                        <div className='story-show-author'>By <span className="author" onClick={() => this.props.history.push(`/users/${this.state.story.owner_id}/stories`)}>{this.state.story.username}</span> · {this.state.story.date}</div>
                        {previousBtn}
                        {nextBtn}
                        <div className='story-show-img'><img src={img} alt=""/></div>
                        <div className='story-show-text'>{this.state.story.text}</div>
                        
                    </div>
                )
        }
    }
}


export default Story;