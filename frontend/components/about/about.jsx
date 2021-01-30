import React from 'react';
import { withRouter } from 'react-router';
import { logoutUser } from '../../actions/session_actions';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (

        // <div>
            <div className='about'>
                <h3>About</h3>
                <h4>
                    Hi, I'm Erica Thompson and welcome to my clone of <a target="_blank" href="http://bandcamp.com">bandcamp.com </a> 
                    made with Ruby on Rails, React, Redux, Node.js, SQL, Active 
                    Record, Active Storage, AWS, AJAX, JSX, Jbuilder, CSS3 and JSX.
                    <br />
                    <br />
                    This clone was also made without using any of <a target="_blank" href="http://bandcamp.com">bandcamp.com</a>'s assets.
                </h4>
                <h3>Assets</h3>
                <div className='credits'>

                    <a href="https://www.pexels.com/@evie-shaffer-1259279">Evie Shaffer</a>
                    <ul>
                        <li><a target="_blank" href="https://www.pexels.com/photo/brown-fern-leaves-2512282/">Brown Fern Leaves</a></li>
                        <li><a target='_blank' href="https://www.pexels.com/photo/green-petaled-flower-2395250/">Green-Petaled Flower</a></li>
                        <li><a target='_blank' href="https://www.pexels.com/photo/green-leafed-plant-with-pink-flowers-2395240/">Green-Leafed Plant with Pink Flowers</a></li>
                        <li><a target='_blank' href="https://www.pexels.com/photo/leaves-on-white-surface-3585648/">Leaves of White Surface</a></li>
                    </ul>
                    <a href="https://www.pexels.com/@tracehudson">Trace Hudson</a>
                    <ul>
                        <li><a href="https://www.pexels.com/photo/bird-s-eye-view-of-mountains-during-dawn-2801818/">Bird's-Eye View of Mountains During Dawn</a></li>
                        <li><a href="https://www.pexels.com/photo/snow-covered-mountain-2365457/">Snow Covered Mountain</a></li>
                    </ul>
                    <a href="">Scott Webb</a>
                    <ul>
                        <li><a target='_blank' href="https://www.pexels.com/photo/white-architectural-structure-1022928/">White Architectural Structure</a></li>
                        <li><a target='_blank' href="https://www.pexels.com/photo/purple-and-blue-abstract-wallpaper-430207/">Purple and Blue Abstract Wallpaper</a></li>
                    </ul>
                </div>

            </div>
        // </div>
        )
    }

}

export default withRouter(About);