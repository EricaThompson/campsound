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
            bar3: '#418194'
        }

    }

    changeColor(genre){
        if (genre === 'electronic'){
            this.setState({ bar1: '#31C723' })
            this.setState({ bar2: '#30B125' })
            this.setState({ bar3: '#309B28' })
        }
    }

    render() {



        return (
            <div className='discover-container'>
                <div className='discover'>
                    <div className='discover-title'>Discover</div>
                    <div className='genres-container'>
                        <ul 
                            className="genres"
                            style={{backgroundColor:this.state.bar1}}
                            >
                            <Link to="/search/browse-all"><li className='all'>all</li></Link>
                            <li onClick={()=>this.changeColor('electronic')}>electronic</li>
                            <Link to="/search/rock"><li>rock</li></Link>
                            <Link to="/search/metal"><li>metal</li></Link>
                            <Link to="/search/alternative"><li>alternative</li></Link>
                            <Link to="/search/rap"><li>hip-hop/rap</li></Link>
                            <Link to="/search/experimental"><li>experimental</li></Link>
                            <Link to="/search/punk"><li>punk</li></Link>
                            <Link to="/search/folk"><li>folk</li></Link>
                            <Link to="/search/pop"><li>pop</li></Link>
                            <Link to="/search/ambient"><li>ambient</li></Link>
                            <Link to="/search/soundtrack"><li>soundtrck</li></Link>
                            <Link to="/search/world"><li>world</li></Link>
                            <Link to="/search/jazz"><li>jazz</li></Link>
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