import React from 'react';
// import Item from './item';
import { Link } from 'react-router-dom';
import * as StoryAPIUtil from '../../util/stories_api_util';

import latest from '../../../app/assets/images/latest.png';

class StoriesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: `https://images.pexels.com/photos/1022928/pexels-photo-1022928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
            review:'https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=620',
            storyList: [],
            // songList: [],
            // currentSong: null,
            // playerView: false
            mainStory: 1,
            spinnerShow: true
        }
    }

    componentDidMount(){
        this.setState({spinnerShow: true})
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        $.ajax({
            url: `/api/stories`,
            method: 'GET'
        }).then(res => this.setState({ mainStory: Object.values(Object.values(res)).reverse()[0]}))
        $.ajax({
            url: `/api/stories`,
            method: 'GET'
        }).then(res => {
            this.setState({storyList: Object.values(Object.values(res))})
            this.setState({spinnerShow: false})
        })
        // }).then(res => console.log(Object.values(Object.values(res))))
        // }).then(res => console.log(Object.values(Object.values(res))[0].text))
    }

    // deleteSong(song) {
    //     this.removeSong(song)
    //     this.props.deleteItem(this.props.currentUserId, song.id)
    //         .then(location.reload())
    // }


    // addToItemList(song) {
    //     let copy = this.state.itemList
    //     if (this.state.itemList.length < 10) {
    //         copy.push(song)
    //         this.setState({ itemList: copy })
    //     }

    // }

    // playSong(song) {
    //     this.setState({ currentSong: song, playerView: true })
    // }

    // nextSong(song) {

    //     let songList = [];
    //     this.state.itemList.forEach(item => {
    //         songList.push(item.song)
    //     })

    //     let index = songList.indexOf(song)
    //     let nextIdx = 0;
    //     if (index + 1 < songList.length) {
    //         nextIdx = index + 1
    //     }

    //     this.setState({ playerView: false })
    //     this.playSong(songList[nextIdx])

    //     this.removeSong(this.state.itemList[index])

    // }

    // removeSong(song) {
    //     let index = this.state.itemList.indexOf(song)
    //     let songCopy = this.state.itemList
    //     songCopy.splice(index, 1)
    //     this.setState({ itemList: songCopy })
    // }


    render() {
        console.log('storyList', this.state.mainStory)

        

        // let storyListMinusMain = this.state.storyList.slice(1)

        
        
        let img;
        
        let storyDisplay = this.state.storyList.reverse().slice(1).map((story) => {
            let editBtn;
            let deleteBtn;
            
            if (story.type === 'news'){
                img = this.state.news
            } else {
                img = this.state.review
            }

            if (story.author === this.props.currentUserId) {
                editBtn = <button
                                onClick={() => this.props.history.replace(`/users/${story.author}/stories/${story.id}/edit`)}
                                className="edit"
                            >
                                edit
                            </button>
                deleteBtn = <button
                                onClick={() => {
                                    StoryAPIUtil.deleteStory(this.props.currentUserId, story.id)
                                    window.location.reload()
                                }}
                                className="delete"
                            >
                                delete
                            </button>

            }

            return <div key={story.id} className="story-display">
                {/* <div className="story-image"></div> */}
                <img 
                    className="story-image"
                    onClick={() => this.props.history.replace(`/users/${story.author}/stories/${story.id}/`)}
                    src={img} alt=""
                />
                <div className='buttons'>
                    <div>{editBtn}</div>
                    <div>{deleteBtn}</div>
                </div>
                
                <div className='main-story-date'>
                    <span className='main-story-type'>{story.type}</span> · {story.date}
                </div>
               {/* <h5 >{story.type} · {story.date}</h5> */}
                {/* <Link to={`stories/${this.props.currentUserId}/story/${story.id}`}> */}
                    {/* <img src={`${story.title}`} alt="" /> */}
                    <h5 
                    onClick={() => this.props.history.replace(`/users/${story.author}/stories/${story.id}/`)}
                        className='main-story-title'>{story.title}</h5>
                    {/* <div className="main-story-summary">{story.text}</div> */}

                {/* </Link> */}
                {/* <div className='main-story-author'>By {story.author}</div> */}
                {/* <h5 onClick={() => this.addTostoryList(story)} className="home-text add">Add to Playlist</h5> */}
                

            </div>
        })
        // let current = 'current';



        if (this.state.mainStory.type === 'news'){
            img = this.state.news
        } else {
            img = this.state.review
        }

        if (this.state.spinnerShow) {
            return (
                <div className="spinner">
                    <i className="fas fa-compass fa-spin"></i>
                    {/* <div className='spinner-space'></div> */}
                </div>
            )

        } else {


        return (
            <div className="stories-container">
                
                <div className='stories-nav'>
                    <h1 
                        className='link'
                        onClick={()=>window.location.reload()}
                        >Campsound Daily</h1>
                    <ul>
                        <li>
                            stories · view all
                        </li>

                    </ul>
                </div>
                <div className="main-story">

                    <img 
                        onClick={() => this.props.history.replace(`/users/${this.state.mainStory.author}/stories/${this.state.mainStory.id}/`)}
                        src={img}
                        alt="main-cover" 
                    />
                    <div className='main-story-info'>
                        <div className='main-story-date'>
                            <span className='main-story-type'>{this.state.mainStory.type}</span> · {this.state.mainStory.date}
                        </div>
                        
                        <div
                            onClick={() => this.props.history.replace(`/users/${this.state.mainStory.author}/stories/${this.state.mainStory.id}/`)} 
                            className='main-story-title'
                        >
                                {this.state.mainStory.title}
                        </div>
                        <div className='main-story-summary'>
                            {this.state.mainStory.summary}
                        </div>
                        <div
                            onClick={()=> this.props.history.replace(`/users/${this.state.mainStory.author}/stories`)}
                            className='main-story-author'>
                            By <span className='name'>{this.state.mainStory.username}</span>
                        </div>
                    </div>
                </div>
                
                <div><img className='latest' src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/latest.png" alt="" /></div>
                <div className='latest-stories'>
                    
                    {storyDisplay}

                </div>

                {/* <h1 className="stories-title">Stories</h1>
                <h4>Count of items</h4> */}
    
            
            </div>
        )
        }
    }
}


export default StoriesIndex;