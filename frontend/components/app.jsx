import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import pexels from '../../app/assets/images/pexels.jpg'
// import { AuthRoute } from '../util/route_util';
// import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

class App extends React.Component {
    render(){
        // const main = 
        return(
            <div className="top">
                <Modal />
                <Route key={Math.random()} path="/" component={NavBarContainer} />
                {/* <Route exact path="/" /> */}
                <img id="main-story" src={require('../../app/assets/images/pexels.jpg')} alt="main story image" />
            </div>
        )
    }
}

export default App;