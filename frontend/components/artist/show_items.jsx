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
        }
    }


    addToItemList(song){
        let copy = this.state.itemList
        if (this.state.itemList.length < 10){
            copy.push(song)
            this.setState({itemList: copy })
        }

    }

    playSong(song){
        console.log('playsong()',song)
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
        console.log("props items",this.props.items)
        let itemDisplay = this.props.items.map((item) => {
            return <div key={item.id} className="item-display">
                        <img src={`${item.cover}`} alt="" />
                        <h5 className="home-text top">{item.title}</h5>
                        <h5 className="home-text">{item.artist}</h5>
                        <h5 onClick={() => this.addToItemList(item)} className="home-text add">Add to Playlist</h5>
                        <h5 className="home-text"><a href={`${item.song}`} download>Download</a></h5>

                    </div>
        })
        let current = 'current';
        
        let playlist = this.state.itemList.map((song, idx) => {
            return <div key={Math.random()} className={`i${idx + 1}`}>
                    {/* {indices.push(idx)} */}
                    <div onClick={() => this.setState({ playerView: false }, () => this.playSong(song.song))}>
                            ▶
                        </div>
                        <div>
                            {idx + 1 + "."}
                        </div>

                        <div
                            className={current} 
                            >
                            {song.title} by {song.artist}
                        </div>
                        <div>
                            
                        </div>
                        <div onClick={() => this.removeSong(song)}>
                            ✘
                        </div>
                    </div>
        })

        let player = <audio key={this.state.currentSong} onEnded={()=>this.nextSong(this.state.currentSong)} autoPlay={true} id="single-player" controls>
                        <source src={this.state.currentSong} type="audio/mpeg" />
                        Your browser does not support the audio tag.
                    </audio>
                
                    
        if (!this.state.playerView || Object.values(this.state.itemList).length === 0){
            player = null
        } 
        let playerTitle;
        if (Object.values(this.state.itemList).length > 0){
            playerTitle = <div className="playlistTitle">playlist</div>
        }


        return (
            <div className="show-items">
                {itemDisplay}
                <div className="music-player">
                    {/* {itemDisplay} */}
                    {/* Music Player */}
                    <br />
                    {playerTitle}
                    {player}
                    {playlist}
                </div>
            </div>
        )
    }
}


export default ShowItems;