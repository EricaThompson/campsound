import React from 'react';
import { Link } from 'react-router-dom';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: []
        }
    }


    addToPlaylist(song){
        this.setState({playlist: playlist.push(song)})

    }

    render() {

        let playlist = []


        return (
            <div className="music-player">
                {/* {itemDisplay} */}
                Music Player
                <br/>
                <audio className="single-player" controls>
                    <source src={`${this.props.items.song}`} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
                {playlist}
                <div>Song 1</div>
                <div>Song 2</div>
            </div>
        )
    }
}


export default MusicPlayer;