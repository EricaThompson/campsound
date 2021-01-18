import React from 'react';
// import Item from './item';
import { Link } from 'react-router-dom';

import latest from '../../../app/assets/images/latest.png';

class StoriesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storyList: [],
            // songList: [],
            // currentSong: null,
            // playerView: false
            mainStory: 1
        }
    }

    componentDidMount(){
        $.ajax({
            url: `/api/stories`,
            method: 'GET'
        }).then(res => this.setState({ mainStory: Object.values(Object.values(res))[0]}))
        $.ajax({
            url: `/api/stories`,
            method: 'GET'
        }).then(res => this.setState({ storyList: Object.values(Object.values(res))}))
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
        console.log('storyList', this.state.storyList)

        // let storyListMinusMain = this.state.storyList.slice(1)

        let storyDisplay = this.state.storyList.slice(1).map((story) => {
            return <div key={story.id} className="story-display">
                {/* <div className="story-image"></div> */}
                <img 
                className="story-image"
                    src="https://f4.bcbits.com/img/0023241359_150.jpg" alt=""/>
                <div className='main-story-date'>
                    <span className='main-story-type'>{story.type}</span> · {story.date}
                </div>
               {/* <h5 >{story.type} · {story.date}</h5> */}
                {/* <Link to={`stories/${this.props.currentUserId}/story/${story.id}`}> */}
                    {/* <img src={`${story.title}`} alt="" /> */}
                    <h5 className='main-story-title'>{story.title}</h5>
                    {/* <div className="main-story-summary">{story.text}</div> */}

                {/* </Link> */}
                {/* <div className='main-story-author'>By {story.author}</div> */}
                {/* <h5 onClick={() => this.addTostoryList(story)} className="home-text add">Add to Playlist</h5> */}
                

            </div>
        })
        // let current = 'current';


        return (
            <div className="stories-container">
                <div className='stories-nav'>
                    <h1>Campsound Daily</h1>
                    <ul>
                        <li>
                            stories · view all
                        </li>

                    </ul>
                </div>
                <div className="main-story">

                    <img 
                        onClick = {() => this.props.history.replace(`/users/${this.state.mainStory.owner_id}/stories/${this.state.mainStory.id}/`)}
                        src="https://f4.bcbits.com/img/0023234048_180" 
                        alt="main-cover" 
                    />
                    <div className='main-story-info'>
                        <div className='main-story-date'>
                            <span className='main-story-type'>{this.state.mainStory.type}</span> · {this.state.mainStory.date}
                        </div>
                        
                        <div className='main-story-title'>
                            {this.state.mainStory.title}
                        </div>
                        <div className='main-story-summary'>
                            {this.state.mainStory.text}
                        </div>
                        <div className='main-story-author'>
                            By <span className='name'>{this.state.mainStory.author}</span>
                        </div>
                    </div>
                </div>
                
                    <div><img className='latest' src={latest} alt="" /></div>
                <div className='latest-stories'>
                    
                    {storyDisplay}

                </div>

                {/* <h1 className="stories-title">Stories</h1>
                <h4>Count of items</h4> */}
            </div>
        )
    }
}


export default StoriesIndex;