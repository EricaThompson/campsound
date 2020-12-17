import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import ArtistHomepageContainer from './artist/artist_homepage_container';
import ArtistItemContainer from './artist/artist_item_form_container';
import SearchContainer from './search/search_container';
import ResultsComponent from './search/results';
import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: ''
        };
    }

    render(){
        return(
            <div className="container">
                <div className="top">
                    <Modal />
                    <Route path="/" component={SearchContainer}/>
                    {/* <Route path="/search/:result" component={ResultsComponent} /> */}
                    <Route key={Math.random()} path="/" component={NavBarContainer} />
                    <Route exact path="/:userId" component={ArtistHomepageContainer} />
                    <Route exact path="/:userId/new" component={ArtistItemContainer} />
                    {/* <Route exact path="/" /> */}
                    {/* <img id="main-story" src={require('../../app/assets/images/pexels.jpg')} alt="main story image" /> */}
                </div>
            </div>
        )
    }
}

export default App;