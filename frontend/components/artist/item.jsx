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
            discography: []
        }
    }

    componentDidMount(){
        UserAPIUtil.getUser(this.props.match.params.userId)
            .then(res => this.setState({user: res}))
        
        if (this.props.match.path.includes('music')) {
            this.props.readItem(this.props.match.params.userId,this.props.match.params.itemId)
                .then(res => this.setState({ item: res.item}))
            this.props.readAllUserItems(this.props.match.params.userId)
                .then(res => this.setState({discography: Object.values(res.items)}))
        }
        

        

        // console.log('items',this.props.items)
        setTimeout(() => {
            this.setState({audioPlayer: true})
        }, 500);

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    switchToStories(){
        console.log(this.props)
        this.props.history.replace(`/artists/${this.props.match.params.userId}/stories`)
        StoryAPIUtil.fetchAllUserStories(this.props.match.params.userId)
            .then(res => console.log('story res', res))
            
    }

    switchToMusic(){
        this.props.history.replace(`/artists/${this.props.match.params.userId}`)
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
                player.innerHTML = `0:0${Math.floor(ct)}`;
            } else if (ct < 60) {
                player.innerHTML = `0:${Math.floor(ct)}`;
            } else {
                if (second < 10) {
                    player.innerHTML = `${minute}:0${second}`;
                } else {
                    player.innerHTML = `${minute}:${second}`
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
        this.props.history.push(`/artists/${this.props.match.params.authorId}`)
    }

    render() {
        // console.log(this.state)
        // console.log('prop item', this.props.items)
        // console.log('state song', this.state.item.song)
        // console.log(this.state.duration)
        let renderPlayer;
        let currentButton;

        if (this.state.playShow){
            currentButton = <div className='play-button' onClick={() => this.play()}><i className="fas fa-play"></i></div>
        } else {
            currentButton = <div className='pause-button' onClick={() => this.pause()}><i className="fas fa-pause"></i></div>
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
        }
        
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
                                    <div className='right-side'>
                                        <div className="time"><span id='elapsed-time'>0:00</span> / {durationRender}</div>
                                        <div className="time-location"></div>
                                    </div>
                                    {/* <div onClick={()=>this.volumeUp()}>Volume Up</div>
                                    <div onClick={()=>this.volumeDown()}>Volume Down</div> */}
                                </div>
                            </div>
            if (!this.state.timeRendered){
                setTimeout(() => {
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
                <Link to={`/artists/${this.state.user.id}/music/${item.id}`} ><img onClick={() => this.refresh()} className="discog-cover" src={`${item.cover}`} alt=""/></Link>
                        <Link to={`/artists/${this.state.user.id}/music/${item.id}`} ><p onClick={()=>this.refresh()} className="discog-title">{item.title}</p></Link>
                        <p className="discog-date">{item.date}</p>
                        {/* {console.log(this.props.user.id)} */}
                    </div>
        })

        let deleteBtn;
        let editBtn;

        if (this.state.item.owner_id === this.props.currentUserId){
            deleteBtn = <button onClick={() => this.deleteSong()}>Delete</button>
            editBtn = < button onClick={() => this.props.history.replace(`/artists/${this.props.currentUserId}/music/${this.state.item.id}/edit`)}>Edit</button>
        }

        let stories;
        stories = this.state.stories
        console.log('stories', stories)


        // console.log(this.state.item)
        let page;
        // console.log(this.props)
        if(this.props.match.path.includes('stories')){
            page = <div>test</div>
        }else {
            page = <div className="item-container">
                <div className='about-item'>
                    <h1>{this.state.item.title}</h1>
                    <p className='artist'>by <Link to={`/artists/${this.state.item.owner_id}`}>{this.state.item.artist_name}</Link></p>
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
                            onClick={() => this.props.history.replace(`/artists/${this.state.user.id}`)}
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
                            onClick={() => this.props.history.replace(`/artists/${this.state.user.id}`)}
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

        

        return (
            <div className="item-show" key={()=>Math.random()}>
                <img className='cover-art-header' src={`${this.state.item.cover}`} alt="" />
                <div className='item-nav-bar'>
                    <div 
                        className="nav-music on-page"
                        onClick={()=> this.switchToMusic()}
                        >
                        <Link to={`/artists/${this.state.item.owner_id}/music/${this.state.item.id}`}>
                            music
                        </Link>

                    </div>
                    <div 
                        className="nav-stories"
                        onClick={()=>this.switchToStories()}
                        >
                        
                        <Link to={`/artists/${this.state.user.id}/stories`}>
                            stories
                        </Link>

                    </div>
                </div>
                {page}
                
            </div>
        )
    }
}


export default Item;