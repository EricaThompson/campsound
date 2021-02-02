import React from 'react';
// import { Link } from 'react-router-dom';
import * as StoryAPIUtil from '../../util/stories_api_util';
import {withRouter} from 'react-router'
// import * as SessionAPIUtil from '../../util/session_api_util';
// // import { readAllUserItems } from '../../util/items_api_util';
// import MailchimpSubscribe from "react-mailchimp-subscribe"

class Daily extends React.Component {
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
            news: 'https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/news.jpg',
            review: 'https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/review.jpg',
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
            
        }
    }


    componentDidMount() {


        StoryAPIUtil.fetchAllStories()
            .then(res => this.setState({
                stories: Object.values(res).reverse()
            }))
        
    }


    render() {



        
        let last;
        let main;
        let mainImg;
        let mainText;
        let mainSummary;
        let img;

        let reversedStories = this.state.stories;

        let stories = reversedStories.map((story, idx) => {
            if (idx < 8) {
                if (idx === 0) {
                    main = 'main',
                        mainImg = 'mainImg',
                        mainText = 'mainText'
                    mainSummary = <div className='story-summary'>
                        {story.summary}
                        <div className='read-more'>read more</div>
                    </div>

                } else if (idx === 7 || idx === 2) {
                    last = 'last'
                    mainSummary = ''
                } else {
                    last = ''
                    main = 'smaller-stories'
                    mainImg = 'story-image'
                    mainSummary = ''
                }

                if (story.type === 'news') {
                    img = this.state.news
                } else {
                    img = this.state.review
                }
                return <div
                    onClick={() => this.props.history.push(`/users/${story.author}/stories/${story.id}`)}
                    className={`story link ${last} ${main}`}
                    key={idx}
                >
                    <img className={`${mainImg}`} src={img} alt="story" />
                    <div className={`${mainText}`}>
                        <div className='story-title'>{story.title}</div>
                        <div className='story-author'>by {story.username}</div>
                        {mainSummary}
                        <div className='story-type'>{story.type}</div>
                    </div>
                </div>

            }


        })



        return (
            <div className="campsound-daily-container">
                <div className='right-now-container daily'>
                    <h2
                        onClick={() => this.props.history.push('/page/stories')}
                        className="right-now link" >CAMPSOUND DAILY</h2>
                </div>
                <div className="stories-container">

                    {stories}
                </div>
                <div
                    onClick={() => this.props.history.push(`/page/stories`)}
                    className='more'>
                    <button>more <div>+</div></button>
                </div>
            </div>
        )
    }
}


export default withRouter(Daily);