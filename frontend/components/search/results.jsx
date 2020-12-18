import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import MusicPlayer from '../music_player/music_player';


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTitle: '',
            audioPlayer: false
        }
    }

    toggleAudioPlayer(){
        this.setState({audioPlayer: !this.state.audioPlayer})
    }

    render() {
        let searchTitle;
        let arrayOfResults = [];
        
        Object.values(this.props.items).forEach(result => {
            arrayOfResults.push(result)
        })

        // let player = 

        
        
        let results = arrayOfResults.map(result=> {
            if (result.genre === 'rock' || 
                result.genre === 'electronic' || 
                result.genre === 'metal' ||
                result.genre === 'rock' ||
                result.genre === 'alternative' ||
                result.genre === 'hip-hop/rap' ||
                result.genre === 'experimental' ||
                result.genre === 'punk' ||
                result.genre === 'ambient' 
            ){
                searchTitle = result.genre
            } else if (Object.values(this.props.items).length > 0){
                searchTitle = 'all results'
            } else {
                
            }
            return <div key={result.id} className="result-parent">
                        
                        <div key={result.id} className="result-display">
                            <img src={`${result.cover}`} alt="" />
                            <h5 className="home-text top">{result.title}</h5>
                            <h5 className="home-text">{result.artist}</h5>
                            <h5 
                                className="home-text add">Add to Playlist
                            </h5>
                            <h5 className="home-text"><a href={`${result.song}`} download>Download</a></h5>
                            {/* <h5 onClick={()=>this.toggleAudioPlayer()} className="home-text">Listen</h5> */}
                            <audio key={result.id} id="results-single-player" controls>
                                <source src={result.song} type="audio/mpeg" />
                                Your browser does not support the audio tag.
                            </audio>
                        </div>

                    </div>
        })
        
        if (arrayOfResults.length < 1 && (this.props.match.path.includes('search'))) {
            searchTitle = 'no results, add one..'
        }

        return (
            <div className="results">
                <br />
                <br />
                <div className="search-title">{searchTitle}</div>
                <br />
                <br />
                {results}
                {/* <MusicPlayer /> */}
            </div>
        )
    }
}


export default Results