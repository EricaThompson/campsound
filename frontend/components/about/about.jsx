import React from 'react';
import { withRouter } from 'react-router';
// import { logoutUser } from '../../actions/session_actions';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <div className='about-page'>
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
                    <a target='_blank' href="https://www.pexels.com/@evie-shaffer-1259279">Evie Shaffer</a>
                    <ul>
                        <li><a target="_blank" href="https://www.pexels.com/photo/brown-fern-leaves-2512282/">Brown Fern Leaves</a></li>
                        <li><a target='_blank' href="https://www.pexels.com/photo/green-petaled-flower-2395250/">Green-Petaled Flower</a></li>
                        <li><a target='_blank' href="https://www.pexels.com/photo/green-leafed-plant-with-pink-flowers-2395240/">Green-Leafed Plant with Pink Flowers</a></li>
                        <li><a target='_blank' href="https://www.pexels.com/photo/leaves-on-white-surface-3585648/">Leaves of White Surface</a></li>
                    </ul>

                    <a target='_blank' href="https://www.pexels.com/@tracehudson">Trace Hudson</a>
                    <ul>
                        <li><a href="https://www.pexels.com/photo/bird-s-eye-view-of-mountains-during-dawn-2801818/">Bird's-Eye View of Mountains During Dawn</a></li>
                        <li><a href="https://www.pexels.com/photo/snow-covered-mountain-2365457/">Snow Covered Mountain</a></li>
                    </ul>

                    <a target='_blank' href="https://www.pexels.com/@scottwebb">Scott Webb</a>
                    <ul>
                        <li><a target='_blank' href="https://www.pexels.com/photo/white-architectural-structure-1022928/">White Architectural Structure</a></li>
                        <li><a target='_blank' href="https://www.pexels.com/photo/purple-and-blue-abstract-wallpaper-430207/">Purple and Blue Abstract Wallpaper</a></li>
                    </ul>

                    <a target='_blank' href="https://www.pexels.com/@aronvisuals">Aron Visuals</a>
                    <ul>
                        <li><a target='_blank' href="https://www.pexels.com/photo/brown-mountains-1643113/">Brown Mountains</a></li> 
                    </ul>

                    <a target='_blank' href="https://www.pexels.com/@efdal-yildiz-325089">Efdal YILDIZ</a>
                    <ul>
                        <li><a href="https://www.pexels.com/photo/flock-of-birds-917494/">Flock of Birds</a></li>
                    </ul>

                    <a target="_blank" href="https://www.pexels.com/@mauveine">Sunyu Kim</a>
                    <ul>
                        <li><a href="https://www.pexels.com/photo/flock-of-birds-917494/">Body of Water and Mountains</a></li>
                    </ul>

                    <a target="_blank" href="https://www.pexels.com/@kei-scampa-1201427">Kei Scampa</a>
                    <ul>
                        <li><a href="https://www.pexels.com/photo/green-wheat-field-4507967/">Green Wheat Field</a></li>
                    </ul>

                    <a target="_blank" href="https://www.pexels.com/@katlovessteve">Kat Jayne</a>
                    <ul>
                        <li><a href="https://www.pexels.com/photo/yellow-plant-545313/">Yellow Plant</a></li>
                    </ul>

                    <a href="https://www.freepik.com/macrovector">MACROVECTOR</a>
                    <ul>
                        <li><a href="https://www.freepik.com/vectors/vintage">Retro Gramophone Icons Set</a></li>
                    </ul>

                    <a href="https://www.freepik.com/alvaro-cabrera">Alvaro Cabrera</a>
                    <ul>
                        <li><a href="https://www.freepik.com/vectors/music">Microphones Design Collection</a></li>
                    </ul>

                    <a href="https://www.freepik.com/freepik">Freepik</a>
                    <ul>
                        <li><a href="https://www.freepik.com/free-vector/hand-drawn-gadget-collection_877589.htm#page=1&query=headphones&position=14">Hand-Drawn Gadget Collection</a></li>
                        <li><a href="https://www.flaticon.com/free-icon/united-states_206626?term=usa%20flag&page=1&position=4&page=1&position=4&related_id=206626&origin=tag">US Flag Icon</a></li>
                    </ul>  

                    <a href="https://www.youtube.com/channel/UCWLWZRyRo453negrq0_BQUg">RJ</a>
                    <ul>
                        <li><a href="https://www.youtube.com/watch?v=bnUUoLYmH3M">Ambient Sounds</a></li>
                    </ul>

                    <h4>Definitions</h4>

                    <ul>
                        <li><a href="https://www.merriam-webster.com/">Merriam Webster</a></li>
                        <li><a href="https://www.dictionary.com/">Dictionary.com</a></li>
                    </ul>  
                </div>
            </div>
        )
    }

}

export default withRouter(About);