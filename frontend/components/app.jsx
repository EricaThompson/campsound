import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
// import { AuthRoute } from '../util/route_util';
// import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

class App extends React.Component {
    render(){
        return(
            <div>
                <Modal />
                <Route key={Math.random()} path="/" component={NavBarContainer} />
                {/* <Route exact path="/" /> */}
            </div>
        )
    }
}

export default App;