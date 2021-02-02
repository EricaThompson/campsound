import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
import { withRouter } from 'react-router-dom';
import MusicPlayer from '../music_player/music_player';


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTitle: '',
            discoverResults: [],
            allResults: [],
            // audioPlayer: false
        }
    }

    // toggleAudioPlayer(){
    //     this.setState({audioPlayer: !this.state.audioPlayer})
    // }

    componentDidMount(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.props.genreSearch(this.props.match.params.result)
            .then(res => this.setState({discoverResults: res.items}))

        this.props.browseAll()
            .then(res => this.setState({allResults: res.items}))
        // console.log(this.props)
    }

    render() {
        console.log('results state',this.state)
        let searchTitle;
        let arrayOfResults = [];
        // console.log(arrayOfResults)
        // console.log(this.state.discoverResults)
        // console.log('currentUser', this.props.currentUser)
        
        Object.values(this.state.discoverResults).forEach(result => {
            arrayOfResults.push(result)
        })

        // let player = 

        if (this.props.match.url === '/search/browse-all'){
            arrayOfResults = [];
            Object.values(this.state.allResults).forEach(result => {
                arrayOfResults.push(result)
            })
        }

        
        
        let results = arrayOfResults.map(result=> {
            if (result.genre === 'rock' || 
                result.genre === 'electronic' || 
                result.genre === 'metal' ||
                result.genre === 'rock' ||
                result.genre === 'alternative' ||
                result.genre.includes('hip-hop') ||
                result.genre === 'experimental' ||
                result.genre === 'pop' ||
                result.genre === 'punk' ||
                result.genre === 'ambient' 
            ){
                searchTitle = result.genre
            } 
            
            let loggedIn;
            if (this.props.currentUserId){
                loggedIn = '-logged-in'
            }
            console.log(result)

            return <div key={result.id} className={`result-parent result-parent${loggedIn}`}>
                        
                <div key={result.id} className="result-display">
                        {/* <Link to={`artists/${this.props.currentUserId}/music/${result.id}`}> */}
                            <span onClick={() => this.props.history.replace(`/users/${this.props.currentUserId}/music/${result.id}`)}>
                                <img src={`${result.cover}`} alt="song cover art" />
                                <h5 className="home-text top">{result.title}</h5>
                            </span>
                            <span onClick={() => this.props.history.replace(`/users/${this.props.currentUserId}`)}>
                                <h5 className="home-text">by {result.artist}</h5>
                            </span>
                            <span className='result-about'>
                                <h5>{result.about}</h5>
                            </span>
                                {/* <h5 
                                    className="home-text add">Add to Playlist
                                </h5> */}
                                <h5 className="home-text"><a href={`${result.song}`} download>Download</a></h5>
                                {/* <h5 onClick={()=>this.toggleAudioPlayer()} className="home-text">Listen</h5> */}
                                <audio key={result.id} id="results-single-player" controls>
                                    <source src={result.song} type="audio/mpeg" />
                                    Your browser does not support the audio tag.
                                </audio>
                        {/* </Link> */}
                            </div>
                    </div>
        })
        
        if (arrayOfResults.length < 1 && (this.props.match.path.includes('search'))) {
            searchTitle = 'no results, add one..'
        }

        let loggedIn;
        if (this.props.currentUserId) {
            loggedIn = '-logged-in'
        }

        if (this.props.match.url === '/search/browse-all') {
            searchTitle = 'all results'
        } 

        console.log(this.props.match)

        
        
        return (
            <div className={`results results${loggedIn}`}>
                <br />
                <br />
                <div className='title-container'>
                    
                    <div className={`search-title search-title${loggedIn}`}>{searchTitle}</div>
                </div>
                <br />
                <br />
                {results}
                {/* <MusicPlayer /> */}
                <div>
                    
                </div>
            </div>

        )
    }
}


export default withRouter(Results)