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
            soundtrck: '',
            world: '',
            jazz : '',

        }

    }

    changeColor(genre){
        this.setState({
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
            soundtrck: '',
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
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28' 
                })
                break;
            case 'hip-hop':
                this.setState({ 
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28' 
                })
                break;
            case 'experimental':
                this.setState({ 
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28' 
                })
                break;
            case 'punk':
                this.setState({ 
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28' 
                })
                break;
            case 'folk':
                this.setState({ 
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28' 
                })
                break;
            case 'pop':
                this.setState({ 
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28' 
                })
                break;
            case 'ambient':
                this.setState({ 
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28' 
                })
                break;
            case 'soundtrack':
                this.setState({ 
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28' 
                })
                break;
            case 'world':
                this.setState({ 
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28' 
                })
                break;
            case 'jazz':
                this.setState({ 
                    bar1: '#31C723',
                    bar2: '#30B125',
                    bar3: '#309B28' 
                })
                break;
            default:
                break;
        }
    }

    render() {



        return (
            <div className='discover-container'>
                <div className='discover'>
                    <div className='discover-title'>Discover</div>
                    <div className='genres-container' style={{ backgroundColor: this.state.bar1 }}>
                        <ul 
                            className="genres"
                            style={{backgroundColor:this.state.bar1}}
                            >
                            <Link to="#"><li className={this.state.all} onClick={() => this.changeColor('all')}>all</li></Link>
                            <Link to="#"><li className={this.state.electronic} onClick={() => this.changeColor('electronic')}>electronic</li></Link>
                            <Link to="#"><li className={this.state.rock} onClick={() => this.changeColor('rock')}>rock</li></Link>
                            <Link to="#"><li className={this.state.metal} onClick={() => this.changeColor('metal')}>metal</li></Link>
                            <Link to="#"><li className={this.state.alternative} onClick={() => this.changeColor('alternative')}>alternative</li></Link>
                            <Link to="#"><li className={this.state.hip_hop} onClick={() => this.changeColor('hip_hop')}>hip-hop/rap</li></Link>
                            <Link to="#"><li className={this.state.experimental} onClick={() => this.changeColor('experimental')}>experimental</li></Link>
                            <Link to="#"><li className={this.state.punk} onClick={() => this.changeColor('punk')}>punk</li></Link>
                            <Link to="#"><li className={this.state.folk} onClick={() => this.changeColor('folk')}>folk</li></Link>
                            <Link to="#"><li className={this.state.pop} onClick={() => this.changeColor('pop')}>pop</li></Link>
                            <Link to="#"><li className={this.state.ambient} onClick={() => this.changeColor('ambient')}>ambient</li></Link>
                            <Link to="#"><li className={this.state.soundtrck} onClick={() => this.changeColor('soundtrack')}>soundtrck</li></Link>
                            <Link to="#"><li className={this.state.world} onClick={() => this.changeColor('world')}>world</li></Link>
                            <Link to="#"><li className={this.state.jazz} onClick={() => this.changeColor('jazz')}>jazz</li></Link>
                        </ul>
                    </div>
                    <div className='bar-two' style={{ backgroundColor: this.state.bar2 }}></div>
                    <div className='bar-three' style={{ backgroundColor: this.state.bar3 }}></div>
                </div>
            </div>
        )
    }
}


export default withRouter(Discover);