import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        }
    }

    componentDidMount() {
        this.props.browseAll()
            .then(res => this.setState({items: res.items}))
        
        this.setState({items: this.props.items})
    }

    render() {
        // console.log(Object.values(this.props.items))
        let items;
        // let marquee = []

        
        items = Object.values(this.state.items).map((item, idx) => {
            if (idx < 8){
                return <div key={item.id}className="slide">
                            <img src={`${item.cover}`} alt=""/>
                            <p>{item.title}</p>
                            <p>by {item.artist}</p>
                            <p>{item.price}</p>
                            <p>{item.date}</p>
                        </div>
            }
        })

        console.log(this.state.items)
        
        


        // setTimeout(() => {
        //     items = Object.values(this.state.items)

        //     while(marquee.length < 9){
        //         setTimeout(() => {
        //             marquee.push(items.unshift())
        //         }, 2000);
        //     }

        // }, 1000);

        // let items = this.state.items
        // let marquee = []
        
        // setTimeout(() => {
        //     marquee.push(items.pop())
        // }, 1000);

        // Object.values(this.props.items).forEach(item => {
        //     if (marquee.length < 9){
        //         // console.log('a')
        //         marquee.push(item)
        //     }
        // })

        // console.log('items', items)
    
        // const slideContainer = document.querySelector('slides')
        // const slide

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
                <div className='slider'>
                    <div className='slides'>
                        {items}
                        {/* <div className="slide">
                            1
                        </div>
                        <div className="slide">
                            2
                        </div>
                        <div className="slide">
                            3
                        </div>
                        <div className="slide">
                            4
                        </div>
                        <div className="slide">
                            5
                        </div>
                        <div className="slide">
                            6
                        </div>
                        <div className="slide">
                            7
                        </div>
                        <div className="slide">
                            8
                        </div> */}

                    </div>
                </div>

                <div className="learn-more">
                    <div>
                        <h3>Fans</h3>
                        <img className="headphones" src="https://campsound-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-12-17+at+8.57.07+PM.png" alt="headhones"/>
                        <p className="headphones-copy">Get instant streaming of your purchases, follow your favorite artists, keep a wishlist, showcase your collection, and explore the music of like-minded fans.</p>
                        <button onClick={() => this.props.openModal('type-signup')}>Learn more</button>
                    </div>
                    <div>
                        <h3>Artists</h3>
                        <img className="mic" src="https://campsound-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-12-17+at+9.03.10+PM.png" alt="microphone"/>
                        <p className="artists">Sell directly to your fans with total control over your music and pricing. Easy access to your customers’ data, real-time stats, music chart reporting, and more.</p>
                        <button onClick={() => this.props.openModal('type-signup')}>Learn more</button>
                    </div>
                    <div>
                        <h3>Labels</h3>
                        <img className="label" src="https://campsound-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-12-17+at+9.15.00+PM.png" alt="gramophone"/>
                        <p>Unified accounting and stats across all your artists, a single fulfillment interface for all your merch, direct payments on a per release basis, and a whole lot more.</p>
                        <button onClick={() => this.props.openModal('type-signup')}>Learn more</button>
                    </div>
                </div>
                

                <div className="footer">
                    <div className="links">
                        <a href="https://github.com/EricaThompson"><i className="fab fa-github"></i></a>
                        {/* <a href=""><i className="fab fa-twitter"></i></a> */}
                        {/* <a href=""><i className="fas fa-at"></i></a> */}
                        <a href="https://www.linkedin.com/in/ericamt/"><i className="fab fa-linkedin"></i></a>
                        <p>ericathompson.io</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;