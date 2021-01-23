import React from 'react';
import {Link} from 'react-router-dom';
import * as StoryAPIUtil from '../../util/stories_api_util';
import * as SessionAPIUtil from '../../util/session_api_util';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: '',
            items: this.props.items,
            stories: [],
            1: 'https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=125',
            2: 'https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=0&w=115',
            3: 'https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=125',
            news: 'https://images.pexels.com/photos/1022928/pexels-photo-1022928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=125',
            review: 'https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=125',
            demo: [{
                owner_id: 85, id: 155, title: "Test", artist: "test", genre: "electronic", date: "Dec 2020", cover: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBajBCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce8112185079b5f5c603e5bf3a66223b05ce0b83/pexels-cliford-mervil-2469122.jpg", song: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBajRCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a2849dcaae069bb71f8428866d00819bf1027f9f/19-Spring-Day-Forest%20(1).mp3"
                }, 
                
                {
                    id: 156,
                    title: 'Untitled',
                    artist: 'Demo User',
                    owner_id: 91,
                    genre: '',
                    date: 'Dec 2020',
                    cover: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBajhCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e921150245c0f7ccefb08eec97c950e9ebe17e7c/pexels-carlos-santos-3672355.jpg',
                    song: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa0FCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--728e014fae0f1ad4a968b8af9d226d140044dde5/19-Spring-Day-Forest%20(1).mp3'
                }, {
                    id: 157,
                    owner_id: 91,
                    title: 'Untitled',
                    artist: 'Demo User',
                    genre: '',
                    date: 'Dec 2020',
                    cover: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa0VCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2d65fd014ec6618832a9fb43515fd69c3ca31fc2/pexels-cliford-mervil-2469122.jpg',
                    song: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa0lCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--962e99ef0e21ef84781b64cd679ee19395d4a91b/19-Spring-Day-Forest%20(1).mp3'
                }, {
                    id: 158,
                    owner_id: 91,
                    title: 'Untitled',
                    artist: 'Demo User',
                    genre: '',
                    date: 'Dec 2020',
                    cover: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa01CIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3fc11260e65501a11198c6ed2d92c712d5df7e1d/pexels-evie-shaffer-5594671.jpg',
                    song: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa1FCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e492951d5fa0e4ddce3de92ac68a67d10d929ec7/Beach%20Sounds%20-%2012-17-20,%2010.47%20PM.mp3'
                }, {
                    id: 160,
                    owner_id: 91,
                    title: 'Untitled',
                    artist: 'Demo User',
                    genre: '',
                    date: 'Jan 2021',
                    cover: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2NCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fa0e1749a87ab682b2f431b22cbac4ff4ae0536b/Screen%20Shot%202021-01-02%20at%205.52.56%20PM.png',
                    song: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2dCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0949fddc9115245964b7f2bbe3ebb26cb4488677/Screen%20Shot%202021-01-02%20at%2010.53.00%20PM.png'
                }, {
                    id: 161,
                    owner_id: 91,
                    title: 'Untitled',
                    artist: 'Demo User',
                    genre: '',
                    date: 'Jan 2021',
                    cover: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2tCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--166d260cff1ec56c47274280c688aa92eaf8258d/Screen%20Shot%202021-01-02%20at%205.52.03%20PM.png',
                    song: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa29CIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e78642b389a2222b9b587677c8d2bd1dd54aa733/Avicii%20-%20Peace%20Of%20Mind%20(1).mp3'
                }, {
                    id: 162,
                    owner_id: 91,
                    title: 'Untitled',
                    artist: 'Demo User',
                    genre: 'electronic',
                    date: 'Jan 2021',
                    cover: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa3NCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2d231107749b0e2f54b274feab20f3a723c4662f/Screen%20Shot%202020-12-10%20at%2012.15.45%20AM_burned.png',
                    song: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa3dCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--953b05f3471731984616d63ae90524eb707ae25b/Avicii%20-%20Peace%20Of%20Mind%20(1).mp3'
                }, {
                    id: 163,
                    owner_id: 91,
                    title: 'Untitled',
                    artist: 'Demo User',
                    genre: 'Electronic',
                    date: 'Jan 2021',
                    cover: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazBCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4575dfcd9127f3ec093219cac851eb0e4234a30f/Screen%20Shot%202020-12-10%20at%2012.05.28%20AM_burned.png',
                    song: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazRCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8c73ef2489a30a091e38020fbae8725a4c9069e7/Avicii%20-%20Peace%20Of%20Mind%20(1).mp3'
                }, {
                    id: 164,
                    owner_id: 91,
                    title: 'Marquee',
                    artist: 'Artist',
                    genre: '',
                    date: 'Jan 2021',
                    cover: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazhCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--05b7bf81d1c5a144c4bd24ca64b4ea9970c26857/Screen%20Shot%202021-01-03%20at%209.55.39%20PM.png',
                    song: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbEFCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--858af4e708bfb6fd57f069b66675123e57af7867/Bassline.wav'
                }, {
                    id: 165,
                    owner_id: 91,
                    title: 'Untitled',
                    artist: 'Demo User',
                    genre: '',
                    date: 'Jan 2021',
                    cover: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbEVCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1fb04ae9a32b97bb434886a40740f3321fa68335/DREAMERS%20JPEG-02.jpg',
                    song: '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbElCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f3ab29aa1df73ccc41fbdb636ff521e692afda4a/Avicii%20-%20Peace%20Of%20Mind%20(1)%20(7).mp3'
                }
                            
            ],
            slider: [],
            text: "Hello world",
            lastLetter: 0,
            count: 0
        }
    }

    // componentWillReceiveProps(){
    // }
    
    componentDidMount() {
        
            // .then(res => console.log(Object.values(res)))




        // console.log(this.props)
        // let items = []
        // let boolean = false;

       

        this.props.browseAll()
            .then(res => this.setState({items: Object.values(res.items)}, console.log(res)))



        // this.setState({items: this.props.items})

        let sliderCopy = []
        
        // let that = this;
        //! this......



        this.timer = setInterval(() => {
            if (this.state.slider.length > 7) {
                clearInterval(this.timer);
                return
            }
            sliderCopy.push(this.state.demo.pop())
            let tempItems = []
            // this.props.browseAll()
            //     .then(res => tempItems = res.items)


            if (tempItems.length > 1){
                sliderCopy.push(tempItems.pop())
                // console.log('prop items!')
            }

            this.setState({slider: sliderCopy});
        

        }, 1000);
        //!^^^^^

        // this.props.browseAll()
        //     .then(res => this.setState({ items: res.items, count: res.items.length}))
            // .then(res => this.setState({count: res.items.length}))

        StoryAPIUtil.fetchAllStories()
            .then(res => this.setState({
                stories: Object.values(res).reverse()
            }))
                // console.log(this.state.stories)))

        SessionAPIUtil.allUsers()
            .then(res => this.setState({ users: Object.values(res) }))
    }

    // genreSearch(genre) {
    //     // this.showDropdown()
    //     this.props.genreSearch(genre)
    //         .then(() => this.props.history.replace(`/search/${genre}`))
    // }

    // slider(){
    //     let i = 0
    //     while (i < 9) {
    //         setTimeout(() => {
    //             rotatedMap[i] = rotatedMap[i + 1]
    //             i++

    //         }, 1000);
    //     }
    //     this.slider()
    // }
    

    render() {
        const { items } = this.state;
        // const textToDisplay = text.slice(0, lastLetter + 1);

        // let items = Object.values(this.state.items)
        // // let marquee = []

        // items[0] = items[1]

        //!this.state.slider instead
        let map = Object.values(this.state.items).reverse().map((item, idx) => {
            // let wait = 3;
            // let second = 0;

                // console.log('home, item owner id', item.owner_id)

                if (idx < 8){

            
                    return  <div className="slide-container">
                                <div key={idx} className="slide">
                                    <Link to={`/artists/${item.owner_id}/music/${item.id}`}>
                                        <img src={`${item.cover}`} alt="" />
                                        <p>{item.title}</p>
                                        <p>by {item.artist}</p>
                                        <p>{item.price}</p>
                                        <p>{item.date}</p>
                                    </Link>
                                </div>
                            </div>
                        
                }
                
                // while( second < wait + 1){
                //     console.log('tick')
                    
                //     setTimeout(function() {
                //         second += 1;
                //     }.bind(this), 1000);
                // }

                // if (second === wait){
                //     console.log(idx)
                //     second = 0;
                //     return <div key={item.id} className="slide">
                //         <Link to={`/artists/${item.owner_id}/music/${item.id}`}>
                //             <img src={`${item.cover}`} alt="" />
                //             <p>{item.title}</p>
                //             <p>by {item.artist}</p>
                //             <p>{item.price}</p>
                //             <p>{item.date}</p>
                //         </Link>
                //     </div>

                // }
                
                
            


        })

        let rotatedMap = map
        // let slot0 = rotatedMap[0]
        // let slot1 = rotatedMap[1]
        // let slot2 = rotatedMap[2]
        // let slot3 = rotatedMap[3]
        // let slots = [slot0, slot1, slot2, slot3]
        
        

        // this.slider();

        // while (i > -1){
        //     rotatedMap[i] = rotatedMap[i + 1]
        //     i--
        // }
        // rotatedMap[0] = slot1
        // rotatedMap[1] = slot2
        // rotatedMap[2] = slot3

    



        // console.log(this.state.items)
        
        


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
        let count;
        if (this.state.items.length > 1){
            count = this.state.demo.length
        }
        // console.log(count)
        // console.log(count)

        let things = ["1", "2", "1", "2", "1", "2", "1", "2", "1", "2",];
        let last;
        let main;
        let mainImg;
        let mainText;
        let img;
        // let stories = this.state.stories.map((story, idx) => {
        // console.log(this.state.stories.story)
        let reversedStories = this.state.stories;

        let stories = reversedStories.map((story, idx)=>{
            if (idx < 8){
                if (idx === 0) {
                    main = 'main',
                        mainImg = 'mainImg',
                        mainText = 'mainText'
                } else if (idx === 7 || idx === 2) {
                    last = 'last'
                } else {
                    last = ''
                    main = ''
                    mainImg = ''
                }

                if (story.type === 'news') {
                    img = this.state.news
                } else {
                    img = this.state.review
                }
                console.log(story)
                return <div
                    onClick={() => this.props.history.replace(`/users/${story.author}/stories/${story.id}`)}
                    className={`story link ${last} ${main}`}
                    key={idx}
                >
                    <img className={`${mainImg}`} src={img} alt="" />
                    <div className={`${mainText}`}>
                        <div className='story-title'>{story.title}</div>
                        <div className='story-author'>by {story.username}</div>
                        <div className='story-type'>{story.type}</div>
                    </div>
                </div>

            }

            
        })

        // console.log(this.state.stories)

        let user1;
        let user2;

        if (this.state.users !== ''){
            user1 = <div className='about-user'>
                        <img className="home-user-image" src={this.state.users[0].userImg} alt=""/>
                        <div className="middle">
                            <div className='username'>{this.state.users[0].username}</div>
                            <div className='location'>{this.state.users[0].location}</div>
                        </div>
                        <p className='bio'> {this.state.users[0].bio}</p>
                        <p className='right'>view full profile</p>
                    </div>
            user2 = <div className='about-user'>
                        <img className="home-user-image" src={this.state.users[1].userImg} alt=""/>
                        <div className="middle">
                            <div className='username'>{this.state.users[1].username}</div>
                            <div className='location'>{this.state.users[1].location}</div>
                        </div>
                        <div className='right'>
                            <div className='bio'>{this.state.users[1].bio}</div>
                            <div>view full profile</div>

                        </div>
                    </div>
        } else {
        }

        console.log(this.state.users[0])

        return (
            <div className="home">
                <div className="stories">
                    <Link to="/stories">
                        <div className="main">
                            <p>The Forest Through the Trees</p>
                            <h6>Songs about healing and hope.</h6>
                            <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/pexels-evie-shaffer-2395250.jpg" alt="blue flowers"/>
                        </div>
                    </Link>
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
                <div className="slider counter">
                        <p className='slider-info'>Artists have uploaded {this.state.items.length} songs using CampSound since established.</p>

                </div>
                <div>
                    <h2 className="right-now ">RIGHT NOW</h2>
                </div>
                <div className='slider'>
                    <div className='slides'>
                        
                        {/* {textToDisplay} */}
                        {map}
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
                <div className="campsound-daily-container">
                    <div className="link" onClick={() => this.props.history.replace(`/stories`)}><h2>CAMPSOUND DAILY</h2></div>
                    <div className="stories-container">

                        {stories}
                    </div>
                </div>
                <div className='discover'>
                    <div className='discover-title'>Discover</div>
                    <ul className="genres">
                        <Link to="/search/browse-all"><li className='all'>all</li></Link>
                        <Link to="/search/electronic"><li>electronic</li></Link>
                        <Link to="/search/rock"><li>rock</li></Link>
                        <Link to="/search/metal"><li>metal</li></Link>
                        <Link to="/search/alternative"><li>alternative</li></Link>
                        <Link to="/search/rap"><li>hip-hop/rap</li></Link>
                        <Link to="/search/experimental"><li>experimental</li></Link>
                        <Link to="/search/punk"><li>punk</li></Link>
                        <Link to="/search/folk"><li>folk</li></Link>
                        <Link to="/search/pop"><li>pop</li></Link>
                        <Link to="/search/ambient"><li>ambient</li></Link>
                        <Link to="/search/soundtrack"><li>soundtrck</li></Link>
                        <Link to="/search/world"><li>world</li></Link>
                        <Link to="/search/jazz"><li>jazz</li></Link>
                    </ul>
                    <div className='bar-two'></div>
                    <div className='bar-three'></div>
                </div>
                <div className='spotlight-title'>
                    Fan Spotlight <span>Recent uploads from Campsound collections</span>
                </div>
                <div className='spotlight'>
                    {user1}
                    {user2}
                </div>
                <div className="dots">
                        
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