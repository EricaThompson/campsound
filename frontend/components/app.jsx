import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';

class App extends React.Component {
    render(){
        return(
            <div>
                
                <Route path="/" component={NavBarContainer} />
                {/* <Route exact path="/" /> */}
            </div>
        )
    }
}

export default App;