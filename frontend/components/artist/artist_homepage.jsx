import React from 'react';
import { Link } from 'react-router-dom';
import ZeroItems from './zero_items';

class ArtistHomepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let component;
        {/* if (search for db items with the index of user returns zero items){*/ }
                component = <ZeroItems/>
        {/* } else {
                component = <ShowItems>
            }
        */}
    
        

        return (
            <div className='artist-home-container'>
                {component}
                <br />
                <br />
                <div className="sidebar">
                    <div className="about">
                        <div>add artist photo</div>
                        <div>{window.currentUser.username}</div>
                        <div>location</div>
                        <div>add artist bio</div>
                    </div>
                </div>

            </div>
        )
    }
}


export default ArtistHomepage