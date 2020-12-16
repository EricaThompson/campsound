import React from 'react';
import { Link } from 'react-router-dom';

class ShowItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            songList: [],
            currentSong: null,
            playerView: false
            // items: null
        }
    }

    // componentDidMount() {
    //     this.props.readAllUserItems(71)
    //         .then(res => this.setState({ items: res }))
    // }

    // clicker(){
    //     console.log('clicked')
    // }

    addToItemList(song){
        let copy = this.state.itemList
        copy.push(song)
        this.setState({itemList: copy })

        // let songCopy = this.state.songList
        // songCopy.push(song.song)
        // this.setState({songList: songCopy})
    }

    playSong(song){
        console.log('playsong()',song)
        // this.setState({playerView: false})
        this.setState({ currentSong: song, playerView: true })
    }

    nextSong(song){

        let songList = []; 
        this.state.itemList.forEach(item => {
            songList.push(item.song)
        })

        let index = songList.indexOf(song)
        let nextIdx = 0;
        if (index + 1 < songList.length){
            nextIdx = index + 1
        }

        this.setState({playerView: false})
        this.playSong(songList[nextIdx])
        
        this.removeSong(this.state.itemList[index])

    }

    removeSong(song){
        let index = this.state.itemList.indexOf(song)
        let songCopy = this.state.itemList
        songCopy.splice(index,1)
        this.setState({itemList: songCopy})
    }
    

    render() {

        let itemDisplay = this.props.items.map((item) => {
            return <div key={item.id} className="item-display">
                        <img src={`${item.cover}`} alt="" />
                        <h5 className="home-text top">{item.title}</h5>
                        <h5 className="home-text">{item.artist}</h5>
                        <h5 onClick={() => this.addToItemList(item)} className="home-text">Add to Playlist</h5>
                        <h5 className="home-text"><a href={`${item.song}`} download>Download</a></h5>
                        <h5 className="home-text">Play</h5>
                        {/* <audio className="single-player" controls>
                            <source src={`${item.song}`} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                        </audio> */}
                    </div>
        })
        let current = 'current';
        let playlist = this.state.itemList.map(song => {
            return <div key={Math.random()} className="song-in-playlist">
                        <div
                            className={current} 
                            onClick={() => this.setState({ playerView: false }, () => this.playSong(song.song))}>
                                {song.title}
                                
                        </div>
                <div onClick={() => this.removeSong(song)}>✘</div>
                    </div>
        })

        console.log('player', this.state.currentSong)
        let player = <audio key={this.state.currentSong} onEnded={()=>this.nextSong(this.state.currentSong)} autoPlay={true} id="single-player" controls>
                        <source src={this.state.currentSong} type="audio/mpeg" />
                        Your browser does not support the audio tag.
                    </audio>
                
                    
        if (!this.state.playerView || Object.values(this.state.itemList).length === 0){
            player = null

        } 


        return (
            <div className="show-items">
                {itemDisplay}
                <div className="music-player">
                    {/* {itemDisplay} */}
                    {/* Music Player */}
                    <br />
                    {player}
                    {playlist}
                </div>
            </div>
        )
    }
}


export default ShowItems;