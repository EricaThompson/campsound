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
            other: 'https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/other.jpg',

            
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
                } else if (story.type === 'review') {
                    img = this.state.review
                } else {
                    img = this.state.other
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