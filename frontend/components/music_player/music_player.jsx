import React from 'react';
import { Link } from 'react-router-dom';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: []
        }
    }

    // componentDidMount() {
    //     this.props.readAllUserItems(71)
    //         .then(res => this.setState({ items: res }))
    // }

    addToPlaylist(song){
        this.setState({playlist: playlist.push(song)})

    }

    render() {
        // console.log('props', this.props.items.items)
        // console.log('state', this.state)
        // console.log('state', this.state.items.items[0])

        // let itemDisplay = this.props.items.map((item) => {
        //     return <div className="item-display">
        //         <img src={`${item.cover}`} alt="" />
        //         <h5 className="home-text top">{item.title}</h5>
        //         <h5 className="home-text">{item.artist}</h5>
        //         <h5 className="home-text">Add to Playlist</h5>
        //         <h5 className="home-text"><a href={`${item.song}`} download>Download</a></h5>
        //         <h5 className="home-text">Play</h5>
        //         <audio className="single-player" controls>
        //             <source src={`${item.song}`} type="audio/mpeg" />
        //                     Your browser does not support the audio tag.
        //                 </audio>
        //     </div>
        // })

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