import React from 'react';
import {Link} from 'react-router-dom';
import * as StoryAPIUtil from '../../util/stories_api_util';
import * as SessionAPIUtil from '../../util/session_api_util';
// import { readAllUserItems } from '../../util/items_api_util';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Daily from './daily';
import MainStories from './main_stories';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: '',
            items: this.props.items,
            stories: [],
            items1: '',
            items2: '',
            disableButton: true,
            // 1: 'https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=125',
            // 2: 'https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=0&w=115',
            // 3: 'https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=125',
            // news: 'https://images.pexels.com/photos/1022928/pexels-photo-1022928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=125',
            // review: 'https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=60&w=125',
            // news: 'https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/news.jpg',
            // review: 'https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/review.jpg',
            i1: {
                0: false,
                1: false,
                2: false,
            },
            i2: {
                0: false,
                1: false,
                2: false,
            },
            0: true,
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
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
            count: 0,
            clicked: false,
            color: '#323232'
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
            .then(res => this.setState({items: Object.values(res.items)}))



        // this.setState({items: this.props.items})

        let sliderCopy = []
        
        // let that = this;
        //! this......



        // this.timer = setInterval(() => {
        //     if (this.state.slider.length > 7) {
        //         clearInterval(this.timer);
        //         return
        //     }
        //     sliderCopy.push(this.state.demo.pop())
        //     let tempItems = []
        //     // this.props.browseAll()
        //     //     .then(res => tempItems = res.items)


        //     if (tempItems.length > 1){
        //         sliderCopy.push(tempItems.pop())
        //         // console.log('prop items!')
        //     }

        //     this.setState({slider: sliderCopy});
        

        // }, 1000);
        //!^^^^^

        // this.props.browseAll()
        //     .then(res => this.setState({ items: res.items, count: res.items.length}))
            // .then(res => this.setState({count: res.items.length}))

        // StoryAPIUtil.fetchAllStories()
        //     .then(res => this.setState({
        //         stories: Object.values(res).reverse()
        //     }))
                // console.log(this.state.stories)))

        SessionAPIUtil.allUsers()
            .then(res => {
                this.setState({ users: Object.values(res)});
                this.props.readAllUserItems(this.state.users[0].id)
                    .then(res => this.setState({items1: res.items}))
                this.props.readAllUserItems(this.state.users[1].id)
                    .then(res => this.setState({ items2: res.items }))
            })


        
    }

    // genreSearch(genre) {
    //     // this.showDropdown()
    //     this.props.genreSearch(genre)
    //         .then(() => this.props.history.push(`/search/${genre}`))
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

    toggleSubmitButton(e){

        if (e.currentTarget.value.length > 0 && e.currentTarget.value.includes('@') && e.currentTarget.value.includes('.') && e.currentTarget.value[0] !== '@' && e.currentTarget.value[0] !== '.'){
            this.setState({ color: '#323232' })
            this.setState({disableButton: false})
        } else {
            this.setState({disableButton: true})
            this.setState({color: 'gray'})
        }

        // if (e.currentTarget.value.length > 0){
        // }

        


    }

    clickAndDisable(){
        if (!this.state.clicked){

            this.setState({clicked: true})
        }
    }



    play1(idx) {
        document.getElementById(`i1${idx}`).play(idx)
        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        // this.setState({[idx]: true})


    }

    play2(idx) {
        document.getElementById(`i2${idx}`).play(idx)
        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        // this.setState({[idx]: true})


    }

    pause1(idx) {
        document.getElementById(`i1${idx}`).pause(idx)
        // this.setState
    }

    pause2(idx) {
        document.getElementById(`i2${idx}`).pause(idx)
        // this.setState
    }

    displayPause1(idx) {
        document.getElementById(`i1${idx}`).pause()

        let i1 = {...this.state.i1}
        i1[idx] = true;
        console.log('i1 pause',i1)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({i1})


    }

    displayPlay1(idx) {
        document.getElementById(`i1${idx}`).play()

        let i1 = { ...this.state.i1 }
        i1[idx] = false;
        console.log('i1 play', i1)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({ i1 })


    }

    reset1(idx){
        let i1 = { ...this.state.i1 }
        i1[idx] = false;
        console.log('i1 reset', i1)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({ i1 })
    }

    reset2(idx) {
        let i2 = { ...this.state.i2 }
        i2[idx] = false;
        console.log('i2 reset', i2)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({ i2 })
    }

    displayPause2(idx) {
        document.getElementById(`i2${idx}`).pause()

        let i2 = { ...this.state.i2 }
        i2[idx] = true;
        console.log('i2 pause', i2)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({ i2 })


    }

    displayPlay2(idx) {
        document.getElementById(`i2${idx}`).play()

        let i2 = { ...this.state.i2 }
        i2[idx] = false;
        console.log('i2 play', i2)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({ i2 })


    }




    render() {

        // console.log(this.state)
        const { items, disableButton } = this.state;
        let color;
        let style;
        let buttonStyle
        // let disable;
        if (!disableButton){
            color = "#232323";
            buttonStyle = 'hover'
            style = 'pointer'
            // disabler = ''; 
        } else {
            color = '';
            style = 'default'
            buttonStyle = 'no-hover'
            // disabler = 'disabled';

        }
        // const textToDisplay = text.slice(0, lastLetter + 1);

        // let items = Object.values(this.state.items)
        // // let marquee = []

        // items[0] = items[1]

        const timeSince = function (date) {
            if (typeof date !== 'object') {
                date = new Date(date);
            }

            let seconds = Math.floor((new Date() - date) / 1000);
            let intervalType;

            let interval = Math.floor(seconds / 31536000);
            if (interval >= 1) {
                intervalType = 'year';
            } else {
                interval = Math.floor(seconds / 2592000);
                if (interval >= 1) {
                    intervalType = 'month';
                } else {
                    interval = Math.floor(seconds / 86400);
                    if (interval >= 1) {
                        intervalType = 'day';
                    } else {
                        interval = Math.floor(seconds / 3600);
                        if (interval >= 1) {
                            intervalType = "hour";
                        } else {
                            interval = Math.floor(seconds / 60);
                            if (interval >= 1) {
                                intervalType = "minute";
                            } else {
                                interval = seconds;
                                intervalType = "second";
                            }
                        }
                    }
                }
            }

            if (interval > 1 || interval === 0) {
                intervalType += 's';
            }

            return interval + ' ' + intervalType;
        };
        // let aDay = 24 * 60 * 60 * 1000;
        // console.log(timeSince(new Date(Date.now() - aDay)));
        // console.log(timeSince(new Date(Date.now() - aDay * 2)));

        
        
        
        //!this.state.slider instead
        let map = Object.values(this.state.items).reverse().map((item, idx) => {
            console.log('item', item)
            // let wait = 3;
            // let second = 0;

                // console.log('home, item owner id', item.owner_id)

                if (idx < 8){

                    

            
                    return <div key={idx} className="slide-container">
                                <div key={idx}className="slide">
                                    <Link to={`/users/${item.owner_id}/music/${item.id}`}>
                                        <img src={`${item.cover}`} alt="" />
                                        <p>{item.title}</p>
                                        <p>by {item.artist}</p>
                                        <p>{item.price}</p>
                                        <p>in {item.zone}</p>
                                        <p className="since">{timeSince(item.timestamp)} ago</p>
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

        

        let user1;
        let items1;
        let user2;
        let items2;



        if (this.state.users !== ''){
            // console.log(this.state.users)
            user1 = <div 
                        onClick={()=> this.props.history.push(`/users/${this.state.users[0].id}`)}
                        className='about-user link'
                    >
                        <div className="user1-triangle"></div>
                        <img className="home-user-image" src={this.state.users[0].userImg} alt="alt"/>
                        <div className="middle">
                            <div className='username'>{this.state.users[0].username}</div>
                            <div className='location'>{this.state.users[0].location}</div>
                        </div>
                        <div className='right'>
                            <div className='bio'> {this.state.users[0].bio}</div>
                            <div>view full profile</div>
                        </div>
                    </div>

            
            

            user2 = <div 
                        onClick={ ()=> {
                            this.props.history.push(`/users/${this.state.users[1].id}`)
                        }}
                        className='about-user link'>
                        <div className="user2-triangle"></div>
                        <img className="home-user-image" src={this.state.users[1].userImg} alt="alt"/>
                        <div className="middle">
                            <div className='username'>{this.state.users[1].username}</div>
                            <div className='location'>{this.state.users[1].location}</div>
                        </div>
                        <div className='right'>
                            <div className='bio'>{this.state.users[1].bio}</div>
                            <div>view full profile</div>

                        </div>
                    </div>
        } 


        if (this.state.items1 !== '') {
            // console.log('i1', this.state.i1)
            items1 = Object.values(this.state.items1).map((item, idx) => {

                let show;
                
                if (idx < 3){
                    let playPauseBtn;
                    // let stateName = "song" + idx
                    if (!this.state.i1[idx]){
                        
                        // console.log('i1[idx]', this.state.i1[idx])
                        // console.log(`concat ${this.state}${stateName}`)
                        playPauseBtn = <div className='play-button' onClick={
                            () => {
                                
                                this.displayPause1(idx)
                                this.play1(idx)
                        }}
                        >
                            <i className="fas fa-play"></i></div>
                    } else {
                        show = 'show'
                        playPauseBtn = <div 
                                            className='pause-button' 
                                            onClick={() => {
                                                this.displayPlay1(idx)
                                                this.pause1(idx)
                                                
                                            }}>
                                                <i className="fas fa-pause"></i>
                                        </div>
                    }
                    return <div 
                                // onClick={()=>this.props.history.push(`/users/${item.owner_id}/music/${item.id}`)}
                                className='spotlight-items'
                                key={`${idx}`}>
                                    <div>

                                        <img className='spotlight-item-img link' src={item.cover} alt="cover art"/>
                                            <div className='audio-control'>
                                                    <audio 
                                                        // controls
                                                        id={`i1${idx}`}
                                                        src={`${item.song}`}
                                                        onEnded={()=>this.reset1(idx)}
                                                        >
                                                    </audio>
                                                    
                                                    <div
                                                        
                                                        className={`play-pause ${show}`}>
                                                        {playPauseBtn}
                                                    </div>

                                                    
                                            </div>
                                    </div>
                                <div className='spotlight-item-info'>
                                    <div 
                                        onClick={() => this.props.history.push(`/users/${item.owner_id}/music/${item.id}`)}
                                        className='spotlight-item-title link'>{item.title}</div>
                                    <div 
                                        onClick={() => this.props.history.push(`/users/${item.owner_id}/music/${item.id}`)}
                                        className='spotlight-item-artist link'>by {item.artist}</div>
                                    <div className='spotlight-item-about'>{item.about}</div>
                                </div>
                                {/* Test2
                                <audio src={`${item.song}`}></audio> */}
                            </div>
                } else {
                    return;
                }
            })

            items2 = Object.values(this.state.items2).map((item, idx) => {
                let show;
                if (idx < 3) {
                    let playPauseBtn;
                    if(!this.state.i2[idx]){
                        // console.log('i1[idx]', this.state.i1[idx])
                        // console.log(`concat ${this.state}${stateName}`)
                        playPauseBtn = <div className='play-button' onClick={
                            () => {

                                this.displayPause2(idx)
                                this.play2(idx)
                            }}
                        >
                            <i className="fas fa-play"></i></div>
                    } else {
                        show = 'show'
                        playPauseBtn = <div
                            className='pause-button'
                            onClick={() => {
                                this.displayPlay2(idx)
                                this.pause2(idx)

                            }}>
                            <i className="fas fa-pause"></i>
                        </div>
                    }
                    return <div
                                
                                className='spotlight-items'
                                key={`${idx}`}
                            >
                                <div>

                                    <img className='spotlight-item-img link' src={item.cover} alt="" />
                                    <div className='audio-control'>
                                        <audio
                                            // controls
                                            id={`i2${idx}`}
                                            src={`${item.song}`}
                                            onEnded={() => this.reset2(idx)}
                                            >
                                        </audio>

                                        <div
                                            // onClick={() => {
                                            //     this.displayPlay1(idx)
                                            //     this.play(idx)
                                            // }}
                                            className={`play-pause ${show}`}>
                                            {playPauseBtn}
                                        </div>


                                    </div>
                                </div>
                                <div className='spotlight-item-info'>
                                        <div 
                                            onClick={() => this.props.history.push(`/users/${item.owner_id}/music/${item.id}`)}
                                            className='spotlight-item-title link'>{item.title}</div>
                                        <div 
                                            onClick={() => this.props.history.push(`/users/${item.owner_id}/music/${item.id}`)}
                                            className='spotlight-item-artist link'>by {item.artist}</div>
                            
                                    <div className='spotlight-item-about'>{item.about}</div>
                                </div>
                            </div>
                } else {
                    return;
                }
            })
        }


        // let summary0;
        // let type1;
        // let type2;
        // let type3;

        // if (this.state.stories.length > 1){
        //     let summaryItems = this.state.stories.reverse()
        //     summary0 = summaryItems[0].summary
        //     type1 = summaryItems[1].type
        //     type2 = summaryItems[2].type
        //     type3 = summaryItems[3].type
        // }

        // console.log(this.state.items)




        // console.log(this.state.users[0])
        // console.log(this.state.items.reverse()[0])
        // console.log('home', this.props)
        let loggedIn;  
        if (this.props.currentUser){
            loggedIn = '-logged-in'
        }


        

        



        return (
            <div className={`home home${loggedIn}`}>
                <div className='gradient'>

                </div>
                <MainStories />
                
                
                <div className="slider counter">
                        <p className='slider-info'>Artists have uploaded {this.state.items.length} songs using CampSound since established.</p>

                </div>
                <div className='right-now-container'>
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

        
                <Daily />
                <div className='mailing-list-container'>
                    
                    

                        <div id="mc_embed_signup" className='mailing-list-inner-container'>
                            <form action="https://gmail.us7.list-manage.com/subscribe/post?u=9728557eba30595dc97decd94&amp;id=0ea8bb7459" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                {/* <label htmlFor="mce-EMAIL">Get the best of Erica's blog, delivered sometimes</label> */}
                                <div id="mc_embed_signup_scroll" className='mailing-list'>
                                    <div className='mailing-list-label'>Get the best of Erica's blog, delivered sometimes</div>
                                    <div className='mailing-list-submit'>
                                        <input onChange={(e)=>this.toggleSubmitButton(e)} type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="your email address" required />
                                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_9728557eba30595dc97decd94_0ea8bb7459" tabIndex="-1" defaultValue="" /></div>
                                    <div className={`clear`}><button style={{ backgroundColor: this.state.color, cursor: style }} type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={`button link ${buttonStyle}`} disabled={this.state.disableButton}>SIGN UP</button></div>
                                    </div>
                                </div>
                            </form>
                        </div>

                </div>


                <div className='discover-container'>
                    <div className='discover'>
                        <div className='discover-title'>Discover</div>
                        <div className='genres-container'>
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
                        </div>
                        <div className='bar-two'></div>
                        <div className='bar-three'></div>
                    </div>
                </div>
                <div className='spotlight-title'>
                    Artist Spotlight <span>Recent uploads from Campsound collections</span>
                </div>
                <div className='spotlight'>
                    <div className='user-1-items'>
                        {user1}
                        <div className='three-items'>
                            <br />
                            <br />
                            <br />
                            <br />
                            
                            {items1}
                        </div>
                    </div>
                    <div className='user-2-items'>
                        {user2}
                        <div className='three-items-2'>
                            <br />
                            <br />
                            <br />
                            <br />
                            
                            {items2}
                        </div>
                    </div>
                    
                </div>
                <div className="dots">
                        
                </div>
                <div className="learn-more">
                    <div className="choice-container">
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
                </div>
                

                
            </div>
        )
    }
}


export default Home;