import React from 'react';
// import { Link } from 'react-router-dom';
import * as StoryAPIUtil from '../../util/stories_api_util';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';

// import * as SessionAPIUtil from '../../util/session_api_util';
// // import { readAllUserItems } from '../../util/items_api_util';
// import MailchimpSubscribe from "react-mailchimp-subscribe"

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            bar1: '#41A0BD',
            bar2: '#4390A8',
            bar3: '#418194',
            all: 'selected',
            electronic: '',
            rock: '',
            metal: '',
            metal: '',
            alternative: '',
            hip_hop: '',
            experimental: '',
            punk: '',
            folk: '',
            pop: '',
            ambient: '',
            soundtrack: '',
            world: '',
            jazz : '',
        }



    }

    componentDidMount(){
        // this.props.genreSearch(this.props.match.params.result)
        //     .then(res => this.setState({ discoverResults: res.items }))

        this.props.browseAll()
            .then(res => this.setState({items: Object.values(res.items)}))
    }

    allTab(){
        this.props.browseAll()
            .then(res => this.setState({ items: Object.values(res.items) }))
    }

    switchTab(genre){
        this.setState({
            items: [],
            all: '',
            electronic: '',
            rock: '',
            metal: '',
            metal: '',
            alternative: '',
            hip_hop: '',
            experimental: '',
            punk: '',
            folk: '',
            pop: '',
            ambient: '',
            soundtrack: '',
            world: '',
            jazz: ''
        })


        // if (genre != 'all'){
        //     this.setState({ all: '' })
        // }
        
        this.setState({ [genre]: 'selected' })

        switch (genre) {
            case 'all':
                this.setState({ 
                    bar1: '#41A0BD',
                    bar2: '#4390A8',
                    bar3: '#418194',
                })
                this.allTab();
                break;
            case 'electronic':
                this.setState({ 
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28' 
                })
                break;
            case 'rock':
                this.setState({ 
                    bar1: '#D42127',
                    bar2: '#BE2428',
                    bar3: '#A72529' 
                })
                break;
            case 'metal':
                this.setState({ 
                    bar1: '#990201',
                    bar2: '#820504',
                    bar3: '#6B0807' 
                })
                break;
            case 'alternative':
                this.setState({ 
                    bar1: '#E65719',
                    bar2: '#CD521E',
                    bar3: '#B64E21' 
                })
                break;
            case 'hip_hop':
                this.setState({ 
                    bar1: '#3764A1',
                    bar2: '#365B8D',
                    bar3: '#355379' 
                })
                break;
            case 'experimental':
                this.setState({ 
                    bar1: '#5D1AE6',
                    bar2: '#581DCD',
                    bar3: '#5220B6' 
                })
                break;
            case 'punk':
                this.setState({ 
                    bar1: '#F25202',
                    bar2: '#D94D0A',
                    bar3: '#C0480D' 
                })
                break;
            case 'folk':
                this.setState({ 
                    bar1: '#984AB5',
                    bar2: '#8A4AA2',
                    bar3: '#7B498D' 
                })
                break;
            case 'pop':
                this.setState({ 
                    bar1: '#F20F93',
                    bar2: '#D91386',
                    bar3: '#C11579' 
                })
                break;
            case 'ambient':
                this.setState({ 
                    bar1: '#A3C2BD',
                    bar2: '#9BB5B1',
                    bar3: '#94A8A5' 
                })
                break;
            case 'soundtrack':
                this.setState({ 
                    bar1: '#5E9FC9',
                    bar2: '#5594BE',
                    bar3: '#4C8AB4' 
                })
                break;
            case 'world':
                this.setState({ 
                    bar1: '#E61964',
                    bar2: '#CD1E5E',
                    bar3: '#B62058' 
                })
                break;
            case 'jazz':
                this.setState({ 
                    bar1: '#07B89F',
                    bar2: '#049F8A',
                    bar3: '#0A8877' 
                })
                break;
            default:
                break;
        }
    }

    render() {

        let results = this.state.items.map((result,idx) => {
            if (idx < 8){
                return <div key={result.id} className="result-display">
                    {/* <Link to={`artists/${this.props.currentUserId}/music/${result.id}`}> */}
                    <span onClick={() => this.props.history.push(`/users/${this.props.currentUserId}/music/${result.id}`)}>
                        <img className="discover-result-image" src={`${result.cover}`} alt="song cover art" />
                        <h5 className="home-text top discover-result-title">{result.title}</h5>
                    </span>
                    <span onClick={() => this.props.history.push(`/users/${this.props.currentUserId}`)}>
                        <h5 className="home-text discover-result-artist">by {result.artist}</h5>
                    </span>
                    <span><h5 className='discover-result-genre'>{result.genre}</h5></span>
                    {/* <span className='result-about'>
                            <h5>{result.about}</h5>
                        </span> */}
                    {/* <h5 
                                            className="home-text add">Add to Playlist
                                        </h5> */}
                    {/* <h5 className="home-text"><a href={`${result.song}`} download>Download</a></h5> */}
                    {/* <h5 onClick={()=>this.toggleAudioPlayer()} className="home-text">Listen</h5> */}
                    {/* <audio key={result.id} id="results-single-player" controls>
                            <source src={result.song} type="audio/mpeg" />
                                            Your browser does not support the audio tag.
                                        </audio> */}
                    {/* </Link> */}
                </div>
            }
            

        })

        console.log(this.state.items)



        return (
            <div className='discover-container'>
                <div className='discover'>
                    <div className='discover-title'>Discover</div>
                    <div className='genres-container' style={{ backgroundColor: this.state.bar1 }}>
                        <ul 
                            className="genres"
                            style={{backgroundColor:this.state.bar1}}
                            >
                            <Link to="#"><li className={this.state.all} onClick={() => this.switchTab('all')}>all</li></Link>
                            <Link to="#"><li className={this.state.electronic} onClick={() => this.switchTab('electronic')}>electronic</li></Link>
                            <Link to="#"><li className={this.state.rock} onClick={() => this.switchTab('rock')}>rock</li></Link>
                            <Link to="#"><li className={this.state.metal} onClick={() => this.switchTab('metal')}>metal</li></Link>
                            <Link to="#"><li className={this.state.alternative} onClick={() => this.switchTab('alternative')}>alternative</li></Link>
                            <Link to="#"><li className={this.state.hip_hop} onClick={() => this.switchTab('hip_hop')}>hip-hop/rap</li></Link>
                            <Link to="#"><li className={this.state.experimental} onClick={() => this.switchTab('experimental')}>experimental</li></Link>
                            <Link to="#"><li className={this.state.punk} onClick={() => this.switchTab('punk')}>punk</li></Link>
                            <Link to="#"><li className={this.state.folk} onClick={() => this.switchTab('folk')}>folk</li></Link>
                            <Link to="#"><li className={this.state.pop} onClick={() => this.switchTab('pop')}>pop</li></Link>
                            <Link to="#"><li className={this.state.ambient} onClick={() => this.switchTab('ambient')}>ambient</li></Link>
                            <Link to="#"><li className={this.state.soundtrack} onClick={() => this.switchTab('soundtrack')}>soundtrack</li></Link>
                            <Link to="#"><li className={this.state.world} onClick={() => this.switchTab('world')}>world</li></Link>
                            <Link to="#"><li className={this.state.jazz} onClick={() => this.switchTab('jazz')}>jazz</li></Link>
                        </ul>
                    </div>
                    <div className='bar-two' style={{ backgroundColor: this.state.bar2 }}></div>
                    <div className='bar-three' style={{ backgroundColor: this.state.bar3 }}></div>
                </div>
                <div className="discover-results-container">
                    <div className={`result-parent discover-results`}>
                        {results}
                    </div>
                    <div className="discover-player">Player</div>
                </div>
            </div>
        )
    }
}


export default withRouter(Discover);