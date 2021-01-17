import React from 'react';
// import Item from './item';
import { Link } from 'react-router-dom';

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
        .then(res => this.setState({ storyList: Object.values(Object.values(res))}))
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
        console.log('props', this.props)

        let storyDisplay = this.state.storyList.map((story) => {
            return <div key={story.id} className="story-display">
               
                <Link to={`artists/${this.props.currentUserId}/music/${story.id}`}>
                    {/* <img src={`${story.title}`} alt="" /> */}
                    <h5>{story.title}</h5>
                    <h5 className="home-text top">{story.text}</h5>
                </Link>
               
                {/* <h5 onClick={() => this.addTostoryList(story)} className="home-text add">Add to Playlist</h5> */}
                

            </div>
        })
        let current = 'current';

        // let playlist = this.state.storyList.map((song, idx) => {
        //     return <div key={Math.random()} className={`i${idx + 1}`}>
        //         {/* {indices.push(idx)} */}
        //         <div onClick={() => this.setState({ playerView: false }, () => this.playSong(song.song))}>
        //             ▶
        //                 </div>
        //         <div>
        //             {idx + 1 + "."}
        //         </div>

        //         <div
        //             className={current}
        //         >
        //             {song.title} by {song.artist}
        //         </div>
        //         <div>

        //         </div>
        //         <div onClick={() => this.removeSong(song)}>
        //             ✘
        //                 </div>
        //     </div>
        // })

        // let player = <audio key={this.state.currentSong} onEnded={() => this.nextSong(this.state.currentSong)} autoPlay={true} id="single-player" controls>
        //     <source src={this.state.currentSong} type="audio/mpeg" />
        //                 Your browser does not support the audio tag.
        //             </audio>


        // if (!this.state.playerView || Object.values(this.state.itemList).length === 0) {
        //     player = null
        // }
        // let playerTitle;
        // if (Object.values(this.state.itemList).length > 0) {
        //     playerTitle = <div className="playlistTitle">playlist</div>
        // }


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
                    <img src="https://f4.bcbits.com/img/0023234048_180" alt="" />
                    <div className='main-story-info'>
                        <div className='main-story-date'>
                            · {this.state.mainStory.date} ·
                        </div>
                        
                        <div className='main-story-title'>
                            {this.state.mainStory.title}
                        </div>
                        <div className='main-story-summary'>
                            {this.state.mainStory.text}
                        </div>
                        <div className='main-story-author'>
                            by {this.state.mainStory.author}
                        </div>
                    </div>
                </div>

                {/* <h1 className="stories-title">Stories</h1>
                <h4>Count of items</h4> */}
                {storyDisplay}
            </div>
        )
    }
}


export default StoriesIndex;