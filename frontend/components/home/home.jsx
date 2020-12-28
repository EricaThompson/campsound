import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.browseAll()
    // }

    render() {
    

        return (
            <div className="home">
                <div className="stories">
                    <div className="main">
                        <p>The Forest Through the Trees</p>
                        <h6>Songs about healing and hope.</h6>
                        <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/pexels-evie-shaffer-2395250.jpg" alt="blue flowers"/>
                    </div>
                    <div className="side">
                        <div className='set'>
                            <p>Gold is in Bloom</p>
                            <h6>Evie Shaffer</h6>
                            <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/pexels-evie-shaffer-2512282.jpg" alt="tan flowers"/>
                        </div>
                        <div className='set'>
                            <p>Piece by Piece</p>
                            <h6>Evie Shaffer</h6>
                            <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/pexels-evie-shaffer-4377081.jpg" alt="pink and blue flowers"/>
                        </div>
                        <div className='set bottom'>
                            <p>Petals All Around</p>
                            <h6>Evie Shaffer</h6>
                            <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/pexels-evie-shaffer-3825880+(1).jpg" alt="flower petals and leaves"/>
                        </div>
                    </div>
                </div>

                <div className="learn-more">
                    <div>
                        <h3>Fans</h3>
                        <img className="headphones" src="https://campsound-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-12-17+at+8.57.07+PM.png" alt="headhones"/>
                        <p className="headphones-copy">Get instant streaming of your purchases, follow your favorite artists, keep a wishlist, showcase your collection, and explore the music of like-minded fans.</p>
                        <button>Learn more</button>
                    </div>
                    <div>
                        <h3>Artists</h3>
                        <img className="mic" src="https://campsound-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-12-17+at+9.03.10+PM.png" alt="microphone"/>
                        <p className="artists">Sell directly to your fans with total control over your music and pricing. Easy access to your customers’ data, real-time stats, music chart reporting, and more.</p>
                        <button>Learn more</button>
                    </div>
                    <div>
                        <h3>Labels</h3>
                        <img className="label" src="https://campsound-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-12-17+at+9.15.00+PM.png" alt="gramophone"/>
                        <p>Unified accounting and stats across all your artists, a single fulfillment interface for all your merch, direct payments on a per release basis, and a whole lot more.</p>
                        <button>Learn more</button>
                    </div>
                </div>

                <div className="footer">
                    <div className="links">
                        <a href=""><i class="fab fa-github"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fas fa-at"></i></a>
                        <p>ericathompson.io</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;