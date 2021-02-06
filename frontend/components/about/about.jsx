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
                    {/* <a target='_blank' href="https://www.pexels.com/@evie-shaffer-1259279">Evie Shaffer</a>
                    <ul>
                        <li><img src="" alt="preview"/><a target="_blank" href="https://www.pexels.com/photo/brown-fern-leaves-2512282/">Brown Fern Leaves</a></li>
                        <li><img src="" alt="preview"/><a target='_blank' href="https://www.pexels.com/photo/green-petaled-flower-2395250/">Green-Petaled Flower</a></li>
                        <li><img src="" alt="preview"/><a target='_blank' href="https://www.pexels.com/photo/green-leafed-plant-with-pink-flowers-2395240/">Green-Leafed Plant with Pink Flowers</a></li>
                        <li><img src="" alt="preview"/><a target='_blank' href="https://www.pexels.com/photo/leaves-on-white-surface-3585648/">Leaves of White Surface</a></li>
                    </ul> */}

                    <div className="owner">
                        <a target='_blank' href="https://www.pexels.com/@bertellifotografia">Matheus Bertelli</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-main.jpg" alt="preview"/><a target="_blank" href="https://www.pexels.com/photo/green-leafed-trees-1144687/">Green-Leafed Trees</a></li>
                    </ul>

                    <div className="owner">
                        <a target='_blank' href="https://www.pexels.com/@fox-58267">FOX</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-side-top.jpg" alt="preview"/><a target="_blank" href="https://www.pexels.com/photo/orange-and-white-koi-fish-near-yellow-koi-fish-213399/">Orange and White Koi Fish</a></li>
                    </ul>

                    <div className="owner">
                        <a target='_blank' href="https://www.pexels.com/@jonathanborba">Jonathan Borba</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-side-middle.jpg" alt="preview"/><a target="_blank" href="https://www.pexels.com/photo/gray-sand-dunes-3155583/">Gray Sand Dunes</a></li>
                    </ul>

                    <div className="owner">
                        <a target='_blank' href="https://www.pexels.com/@conojeghuo">Clem Onojeghuo</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/home-stories-side-bottom.jpg" alt="preview"/><a target="_blank" href="https://www.pexels.com/photo/white-and-blue-body-of-water-175773/">White and Blue Body of Water</a></li>
                    </ul>

                

                    <div className="owner">
                        <a target='_blank' href="https://www.pexels.com/@tracehudson">Trace Hudson</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/1.jpeg" alt="preview"/><a target="_blank" href="https://www.pexels.com/photo/bird-s-eye-view-of-mountains-during-dawn-2801818/">Bird's-Eye View of Mountains During Dawn</a></li>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/10.jpeg" alt="preview"/><a target="_blank" href="https://www.pexels.com/photo/snow-covered-mountain-2365457/">Snow Covered Mountain</a></li>
                    </ul>

                    <div className="owner">
                        <a target='_blank' href="https://www.pexels.com/@scottwebb">Scott Webb</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/news.jpg" alt="preview"/><a target='_blank' href="https://www.pexels.com/photo/white-architectural-structure-1022928/">White Architectural Structure</a></li>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/review.jpg" alt="preview"/><a target='_blank' href="https://www.pexels.com/photo/purple-and-blue-abstract-wallpaper-430207/">Purple and Blue Abstract Wallpaper</a></li>
                    </ul>

                    <div className="owner">
                        <a target='_blank' href="https://www.pexels.com/@aronvisuals">Aron Visuals</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/9.jpeg" alt="preview"/><a target='_blank' href="https://www.pexels.com/photo/brown-mountains-1643113/">Brown Mountains</a></li> 
                    </ul>

                    <div className="owner">
                        <a target='_blank' href="https://www.pexels.com/@efdal-yildiz-325089">Efdal YILDIZ</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/7.jpeg" alt="preview"/><a target="_blank" href="https://www.pexels.com/photo/flock-of-birds-917494/">Flock of Birds</a></li>
                    </ul>

                    <div className="owner">
                        <a target="_blank" href="https://www.pexels.com/@mauveine">Sunyu Kim</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/5.jpeg" alt="preview"/><a target="_blank" href="https://www.pexels.com/photo/flock-of-birds-917494/">Body of Water and Mountains</a></li>
                    </ul>

                    <div className="owner">
                        <a target="_blank" href="https://www.pexels.com/@kei-scampa-1201427">Kei Scampa</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/4.jpeg" alt="preview"/><a target="_blank" href="https://www.pexels.com/photo/green-wheat-field-4507967/">Green Wheat Field</a></li>
                    </ul>

                    <div className="owner">
                        <a target="_blank" href="https://www.pexels.com/@katlovessteve">Kat Jayne</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/seeds/covers/3.jpeg" alt=""/><a target="_blank" href="https://www.pexels.com/photo/yellow-plant-545313/">Yellow Plant</a></li>
                    </ul>

                    <div className="owner">
                        <a target='_blank' href="https://www.freepik.com/macrovector">MACROVECTOR</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/gramophone.png" alt="preview"/><a target="_blank" href="https://www.freepik.com/vectors/vintage">Retro Gramophone Icons Set</a></li>
                    </ul>

                    <div className="owner">
                        <a target='_blank' href="https://www.freepik.com/alvaro-cabrera">Alvaro Cabrera</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/microphone.png" alt="preview"/><a target="_blank" href="https://www.freepik.com/vectors/music">Microphones Design Collection</a></li>
                    </ul>

                    <div className="owner">
                        <a target='_blank' href="https://www.freepik.com/freepik">Freepik</a>
                    </div>
                    <ul>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/headphones.png" alt="preview"/><a target="_blank" href="https://www.freepik.com/free-vector/hand-drawn-gadget-collection_877589.htm#page=1&query=headphones&position=14">Hand-Drawn Gadget Collection</a></li>
                        <li><img src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/united-states.png" alt="preview"/><a target="_blank" href="https://www.flaticon.com/free-icon/united-states_206626?term=usa%20flag&page=1&position=4&page=1&position=4&related_id=206626&origin=tag">US Flag Icon</a></li>
                    </ul>  
                    <h3>Sounds</h3>
                    <div className="owner">
                        <a target='_blank' href="https://www.youtube.com/channel/UCWLWZRyRo453negrq0_BQUg">RJ</a>
                    </div>
                    <ul>
                        <li><a target="_blank" href="https://www.youtube.com/watch?v=bnUUoLYmH3M">Ambient Sounds</a></li>
                    </ul>

                    <h3>Definitions</h3>

                    <ul>
                        <li><a target="_blank" href="https://www.merriam-webster.com/">Merriam Webster</a></li>
                        <li><a target="_blank" href="https://www.dictionary.com/">Dictionary.com</a></li>
                    </ul>  
                </div>
            </div>
        )
    }

}

export default withRouter(About);