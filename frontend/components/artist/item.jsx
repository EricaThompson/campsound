import React from 'react';
import { Link } from 'react-router-dom';
import * as UserAPIUtil from '../../util/session_api_util';
import * as StoryAPIUtil from '../../util/stories_api_util';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            item: '',
            stories: '',
            playerView: false,
            audioPlayer: false,
            playShow: true,
            pauseShow: false,
            duration: 'time',
            currentTime: 'current',
            timeRendered: false,
            discography: [],
            news: 'https://images.pexels.com/photos/1022928/pexels-photo-1022928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            review: 'https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=620',
            spinnerShow: false,
            once: false
            
        }
    }

    componentDidMount(){
        // console.log(this.state.user);
        this.setState({spinnerShow: true})
        UserAPIUtil.getUser(this.props.match.params.ownerId)
            .then(res => {
                this.setState({user: res})
                // this.setState({spinnerShow: false})
            })

        
        if (this.props.match.path.includes('music')) {
            this.props.readItem(this.props.match.params.ownerId,this.props.match.params.itemId)
                .then(res => {
                    this.setState({ item: res.item})
                    this.setState({ spinnerShow: false })
                })
            this.props.readAllUserItems(this.props.match.params.ownerId)
                .then(res => {
                    this.setState({discography: Object.values(res.items)})
                    this.setState({ spinnerShow: false })
                })
        
        }

        if (this.props.match.path.includes('stories')){
            StoryAPIUtil.fetchAllUserStories(this.props.match.params.ownerId)
                .then(res => {
                    this.setState({stories: Object.values(res)})
                    this.setState({ spinnerShow: false })
                })
        }
        

        

        // console.log('items',this.props.items)
        setTimeout(() => {
            this.setState({audioPlayer: true})
        }, 500);

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    stopSpinner(){
        if (!this.state.once){
            this.setState({spinnerShow: false})
            this.setState({once: true})
        }

    }

    switchToStories(){
        // console.log(this.props)
        this.props.history.replace(`/users/${this.props.match.params.ownerId}/stories`)
        
            
    }

    switchToMusic(){
        this.props.history.replace(`/users/${this.props.match.params.ownerId}`)
    }

    refresh(){
        setTimeout(() => {
            window.location.reload()
        }, 1);
    }

    

    toggleAudioPlayer() {
        this.setState({ audioPlayer: !this.state.audioPlayer })
    }

    play(){
        document.getElementById('item-player').play()
        this.setState({playShow: false})
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
    }

    pause(){
        document.getElementById('item-player').pause()
        this.setState({playShow: true})
        // document.querySelector('.fa-play').classList.remove('disappear')
        // document.querySelector('.fa-pause').classList.add('disappear')
    }

    timeUpdate(){
        let player = document.getElementById('elapsed-time')
        // console.log(player.currentTime)
        this.getDuration()
        let second;
        let minute;
        let ct = this.state.currentTime
        if (this.props.match.path.includes('music')){
            if (ct % 60 === 0 || ct > 60) {
                minute = Math.floor(ct / 60)
                second = Math.floor(ct - (minute * 60))
            } else {
                minute = 0
            }

            if (ct < 10) {
                player.innerHTML = `00:0${Math.floor(ct)}`;
            } else if (ct < 60) {
                player.innerHTML = `00:${Math.floor(ct)}`;
            } else {
                if (second < 10) {
                    player.innerHTML = `0${minute}:0${second}`;
                } else {
                    player.innerHTML = `0${minute}:${second}`
                }
            }
        }
        
    }

    // volumeUp(){
    //     if (document.getElementById('item-player').volume < 1){
    //         document.getElementById('item-player').volume += 0.1
    //     }
    // }

    // volumeDown(){
    //     if (document.getElementById('item-player').volume >= .1){
    //         document.getElementById('item-player').volume -= 0.1
    //     }
    // }



    getDuration(){
        // let time = document.getElementById('item-player').duration
        
        if (this.props.match.path.includes('music')) {
            this.setState({duration: document.getElementById('item-player').duration})
            this.setState({ currentTime: document.getElementById('item-player').currentTime})
            this.setState({timeRendered: true})
            return this.state.currentTime
        }
    }

    deleteSong(){
        this.props.deleteItem(this.props.currentUserId, this.state.item.id)
        this.props.history.push(`/users/${this.props.match.params.ownerId}`)
    }

    

    render() {

        // if (this.state.spinnerShow) {
        //     console.log(true)

        // } else {
        //     console.log(false)
        // }


        let renderPlayer;
        let currentButton;

        if (this.state.playShow){
            currentButton = <div className='play-button' onClick={() => this.play()}><i className="fas fa-play"></i></div>
        } else {
            currentButton = <div className='pause-button' onClick={() => this.pause()}><i className="fas fa-pause"></i></div>
        }

        if (this.state.currentTime === this.state.duration){
            currentButton = <div className='play-button' onClick={() => this.play()}><i className="fas fa-play"></i></div>
        }

        let remainder;
        let minute;
        let second;
        let timeDuration = Math.round(this.state.duration)
        let durationRender;
        if (timeDuration > 59) {
            minute = Math.floor(timeDuration / 60)
            remainder = minute * 60
            second = timeDuration - remainder
            if (second < 10) {
                second = `0${second}`
            }
            
            durationRender = <span>{minute}:{second}</span>
        } else if (timeDuration < 10){
            durationRender = <span>00:0{timeDuration}</span>
        } else {
            durationRender = <span>00:{timeDuration}</span>
            // this.stopSpinner();
        }



        // if (this.state.duration){
        //     this.stopSpinner();
        // }
        
        // console.log(this.state.currentTime)
        // let timeLeft = this.state.currentTime
        // while (this.state.pauseShow){
        //     num = 0
        //     this.getDuration()
        // }
        // let currentTimeRender;
        // let counter;
        // if (timeLeft === 0){
        //     counter = 0
        //     while(this.state.pauseShow){
        //         setTimeout(() => {
        //             counter += 1
        //         }, 1000)
        //     }
        //     currentTimeRender = <span>{counter}</span>
        // }
        // else if (timeLeft > 59){
        //     minute = Math.floor(timeLeft / 60)
        //     remainder = minute * 60
        //     second = timeLeft - remainder
        //     currentTimeRender = <span>{minute}:{second}</span>
        // } else {
        //     minute = Math.floor(timeLeft / 60)
        //     remainder = minute * 60
        //     second = timeLeft - remainder
        //     currentTimeRender = <span>{minute}:{second}</span>
        // }
        
        if (this.state.audioPlayer){
            // console.log('time?')
            renderPlayer = <div>
                                <audio 
                                    id="item-player" 
                                    controls="controls"
                                    onTimeUpdate={()=>this.timeUpdate()}
                                >
                                        <source src={this.state.item.song} type="audio/mpeg" />
                                        Your browser does not support the audio tag.
                                </audio>
                                <div className="controls">
                                    <div className="play-pause">
                                        {currentButton}                                            
                                    </div>
                                    <div 
                                        style={{position: 'relative'}}
                                        className='right-side'>
                                        <div className="time"><span id='elapsed-time'>00:00</span> / {durationRender}</div>
                                        
                                        <div className="time-location"></div>

                                        {/* <div
                                            style={{ transform: `scaleX(${this.state.currentTime})` }}
                                            id="progress-bar"
                                        >
                                            Progress Bar
                                        </div> */}
                                        {/* <progress
                                            value={this.state.currentTime}
                                            max={timeDuration}
                                            id="main-song-progress"
                                        >
                                        </progress> */}
                                        <input
                                            // id='seeker'
                                            className='seeker'
                                            type="range"
                                            value={this.state.currentTime}
                                            max={timeDuration}
                                            // min="-5"    
                                        />
                                        {/* <div 
                                            style={{backgroundColor: 'blue', height: '10px', width: '10px', position: 'absolute', left: `10`}}
                                            className='progress-square'>

                                        </div> */}

                                        {/* Progress Bar */}
                                    </div>
                                    {/* <div onClick={()=>this.volumeUp()}>Volume Up</div>
                                    <div onClick={()=>this.volumeDown()}>Volume Down</div> */}
                                </div>
                            </div>
            if (!this.state.timeRendered){
                setTimeout(() => {
                    // this.stopSpinner();
                    this.getDuration();
                    // console.log(this.state.currentTime)
                    
                }, 1000);
                
            }
        
        }

        // console.log('props', this.props)


        let image = <img
            className="image"
            src={this.state.user.userImg}
            alt=""
        />

        // console.log('user', this.state.user)



        let reversedDiscography = [];

        for (let i = this.state.discography.length - 1; i > -1; i--){
            reversedDiscography.push(this.state.discography[i])
        }

        let discography = reversedDiscography.map(item => {
            return <div key={item.id}>
                <Link to={`/users/${this.state.user.id}/music/${item.id}`} ><img onClick={() => this.refresh()} className="discog-cover" src={`${item.cover}`} alt=""/></Link>
                        <Link to={`/users/${this.state.user.id}/music/${item.id}`} ><p onClick={()=>this.refresh()} className="discog-title">{item.title}</p></Link>
                        <p className="discog-date">{item.date}</p>
                        
                    </div>
        })

        let deleteBtn;
        let editBtn;

        if (this.state.item.owner_id === this.props.currentUserId){
            deleteBtn = <button onClick={() => this.deleteSong()}>Delete</button>
            editBtn = < button onClick={() => this.props.history.replace(`/users/${this.props.currentUserId}/music/${this.state.item.id}/edit`)}>Edit</button>
        }

        let stories;
        let img;
        let mostRecentStory;
        if (this.state.stories.length > 0){
            mostRecentStory = this.state.stories[0].type
        }

        
        // stories = this.state.stories
        if (this.state.stories !== '' && this.props.match.path.includes('stories')){
            
        
            stories = this.state.stories.reverse().map((story, idx) => {
                if (story.type === "news"){
                    img = this.state.news
                    // mostRecentStory = story
                } else {
                    img = this.state.review
                    // mostRecentStory = story
                }
                // console.log(story.author)
                return <div 
                            key={idx} 
                            className='story link'

                            onClick={()=>this.props.history.replace(`/users/${story.author}/stories/${story.id}`)}
                            >
                                <img className="story-image" src={img} alt=""/>
                                <div className="upper"><span className='type'>{story.type}</span> · <span className='date'>{story.date}</span></div>
                                        {/* <div></div> */}
                                        <div className='lower'>{story.title}</div>
                                {/* <img src={img} alt=""/> */}
                        </div>
            })
        } 


        // console.log(this.state.item)
        let page;
        // console.log(this.props)
        if(this.props.match.path.includes('stories')){
            page = <div className="artist-stories-container">
                        {stories}
                    </div>
        }else {
            page = <div className="item-container">
                <div className='about-item'>
                    <h1>{this.state.item.title}</h1>
                    <p className='artist'>by <Link to={`/users/${this.state.item.owner_id}`}>{this.state.item.artist_name}</Link></p>
                    {editBtn}
                    {deleteBtn}

                    <br />
                    {renderPlayer}
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                    {/* hello */}

                    <h3 className="digital">Digital Track</h3>
                    <h4 className='availability'>Streaming + Download</h4>
                    <p className="inclusion">Includes unlimited streaming via the free Bandcamp app, plus high-
                            <br />
                            quality download in MP3, FLAC and more.
                        </p>
                    <a className="download" href={`${this.state.item.song}`} download>Download Digital Track </a><span className="price">{this.state.item.price}</span>
                    <br />
                    <br />
                    <p className='about'> {this.state.item.about}</p>
                    <p className="release-date" >released {this.state.item.date}</p>
                    <p className="copyright" >© all rights reserved</p>
                </div>
                <img className="item-cover" src={this.state.item.cover} alt="song art" />

                <div className="sidebar">
                    <div className="about">
                        {/* <div className="username">
                                {this.state.item.owner_id}
                            </div> */}
                        <div
                            onClick={() => this.props.history.replace(`/users/${this.state.user.id}`)}
                            className="image link">
                            {image}
                            {/* <input
                                    id="user-image"
                                    type="file"
                                    // onChange={this.imageSubmit.bind(this)}
                                /> */}
                            {/* <div className="change-image">↻</div> */}
                        </div>

                        <p
                            onClick={() => this.props.history.replace(`/users/${this.state.item.owner_id}`)}
                            className='username link'>{this.state.user.username}
                        </p>
                        <p className="location">{this.state.user.location}</p>
                        <p className="side-bio">{this.state.user.bio}</p>
                        <p className='discography'>discography</p>
                        {discography}

                        {/* {location}
                            {bio} */}
                    </div>
                </div>
            </div>
        }

        
        let onMusicPage = false;
        let onStoriesPage = false;

        if (this.props.match.path.includes('music')){
            onMusicPage = 'on-page';
            onStoriesPage = false;
        } else {
            onStoriesPage = 'on-page';
            onMusicPage = false;

        }

        if (this.state.spinnerShow){
            return (
                <div className="spinner">
                    <i className="fas fa-compass fa-spin"></i>
                    <p>Loading</p>
                </div>
            )
        } else if (this.props.match.path.includes('stories')){
            let loggedIn;
            if (this.props.currentUserId) {
                loggedIn = '-logged-in';
        }

        console.log(this.state.user)

            return (
                <div className={`item-show item-show${loggedIn}`} key={() => Math.random()}>
                    {/* <img className='cover-art-header stories-header' src={img} alt="" /> */}
                    {/* <div>{username} Good {type} <span>Contributor</span></div> */}
                    <div className={`artist-stories-header `}>
                        <div><span
                            className='link'
                            onClick={() => this.props.history.replace(`/users/${this.props.match.params.ownerId}`)}>{this.state.user.username}
                        </span>
                            <span className='contributor'> {/* Good {mostRecentStory}  */}
                                {this.state.user.user_type} Contributor
                            </span>
                        </div>
                        <div className='count'>1 to {this.state.stories.length}</div>
                    </div>
                    <div className='item-nav-bar'>
                        <div
                            className={`nav-music ${onMusicPage}`}
                            onClick={() => this.switchToMusic()}
                        >
                            <Link to={`/users/${this.state.item.owner_id}/music/${this.state.item.id}`}>
                                music
                        </Link>

                        </div>
                        <div
                            className={`nav-stories ${onStoriesPage}`}
                            onClick={() => this.switchToStories()}
                        >

                            <Link to={`/users/${this.state.user.id}/stories`}>
                                stories
                        </Link>

                        </div>
                    </div>
                    {page}


                </div>
            )
        } else {
            return (
                <div className="item-show" key={() => Math.random()}>
                    <img className='cover-art-header' src={`${this.state.item.cover}`} alt="" />
                    <div className='item-nav-bar'>
                        <div
                            className={`nav-music ${onMusicPage}`}
                            onClick={() => this.switchToMusic()}
                        >
                            <Link to={`/users/${this.state.item.owner_id}/music/${this.state.item.id}`}>
                                music
                        </Link>

                        </div>
                        <div
                            className={`nav-stories ${onStoriesPage}`}
                            onClick={() => this.switchToStories()}
                        >

                            <Link to={`/users/${this.state.user.id}/stories`}>
                                stories
                        </Link>

                        </div>
                    </div>
                    {page}


                </div>
            )
        }

        
    }
}


export default Item;