import React from 'react';
import { Link } from 'react-router-dom';
import ZeroItems from './zero_items';
import ShowItems from './show_items';
import * as UserAPIUtil from '../../util/session_api_util';


// import MusicPlayer from '../music_player/music_player';

class ArtistHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'user',
            status: null,
            image: '',
            locationFlag: false,
            location: '',
            bioFlag: false,
            bio: '',
            newImage: null,
            link: '',
            items: null,
            biggerImage: false,
            spinnerShow: false
        }
    }

    componentDidMount() {
        this.setState({spinnerShow: true})
        // ()=>document.body.scrollTop = 0;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        UserAPIUtil.getUser(this.props.match.params.ownerId)
        .then(res => this.setState({ 
            user: res, 
            image: res.userImg, 
            location: res.location || '',
            bio: res.bio || ''
        }));
        // .then(res => this.setState({user: res}))    
        
        this.props.readAllUserItems(this.props.match.params.ownerId)
            .then( ()=>this.setState({spinnerShow: false}));
        // .then(res => this.setState({ items: res }))
        
        ()=>window.location.reload();
    }

    makeBigger(){
        this.setState({biggerImage: !this.state.biggerImage})
    }

    switchToStories() {
        // console.log(this.props)
        this.props.history.replace(`/users/${this.props.match.params.ownerId}/stories`)
    }

    handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append('user[location]', this.state.location)
        formData.append('user[bio]', this.state.bio)
        formData.append('user[link]', this.state.link)

        this.props.updateUser(formData, this.props.currentUser)
            this.setState({
                locationFlag: false,
                bioFlag: false
            })
    }
    
    imageSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[user_img]', e.currentTarget.files[0]);
        this.props.updateUser(formData, this.props.currentUser)
    }

    flagChange(val){
        if (val === "locationFlag"){
            this.setState({ [val]: !this.state.locationFlag})
        } else {
            this.setState({ [val]: !this.state.bioFlag})
            this.setState({bio: ''})
        }
    }

    handleChange(val){
        return e => {
            this.setState({[val]: e.currentTarget.value})
        }
    }

    render(){
        // console.log(this.state.user, this.state.user)
        // console.log('state', this.state)
        let items = [];
        Object.values(this.props.items).forEach(item => {
            items.push(item)
        })

        let component;
        if (Object.values(this.props.items).length === 0) {
            component = <ZeroItems userId={this.props.currentUser} />
        } else {
            component = <ShowItems currentUserId={this.props.currentUser} items={items} deleteItem={this.props.deleteItem}/>
        }     
        
        let bigger;
        let largerUserImage;

        if (this.state.biggerImage){
            bigger = 'bigger'
            largerUserImage = 'larger-user-image-bigger'
        } else {
            largerUserImage = 'larger-user-image'
            bigger = ''

        }

        

            
        let image = <div>
                        <img 
                            onClick={()=> this.makeBigger()}
                            className={`link image ${bigger}`} 
                            src={this.state.user.userImg} 
                            alt="user profile"
                        />
                        <div 
                            onClick={()=>this.makeBigger()}
                            className="x link">✕
                        </div>
                    </div>
        
        
        let location = null;
        let bio = null;
        
        let locationCharCount = this.state.location.length;
        let locationCharLeft = 35 - locationCharCount;
        let bioCharCount = this.state.bio.length;
        let bioCharLeft = 400 - bioCharCount;
        
        
        let locationDisabler = true;
        if (this.state.location.length > 0){
            locationDisabler = false
        } else {
            locationDisabler = true
        }
        
        let bioDisabler = true;
        if (this.state.bio.length > 0) {
            bioDisabler = false
        } else {
            bioDisabler = true
        }
        
        let locationAdded;

        if (typeof(this.state.user) !== 'string'){
            // console.log('works')

            if (this.state.location.length > 0) {
                locationAdded = this.state.location
            } else {
                locationAdded = ''
            }

            let locationUpdater;

            if (locationAdded.length === 0) {
                locationUpdater = "add location"
            } else {
                locationUpdater = "edit location"
            }

            let bioAdded;
            if (this.state.bio.length > 0) {
                bioAdded = this.state.bio
            } else {
                bioAdded = ''
            }

            let bioUpdater;
            if (bioAdded.length === 0) {
                bioUpdater = "add bio"
            } else {
                bioUpdater = "edit bio"
            }

            if (!this.state.locationFlag) {
                location = <div className='location-output'>
                    {locationAdded}
                    <div
                        className="location"
                        onClick={() => this.flagChange('locationFlag')}
                    >
                        <br />
                        {locationUpdater}

                    </div>
                </div>
            } else {
                location = <form
                    className="artist-form"
                    onSubmit={this.handleSubmit.bind(this)}
                >
                    <input
                        maxLength="35"
                        onChange={this.handleChange('location')}
                        className="location-input"
                        type="text"
                        value={this.state.location}
                    />
                    <div className="count">{locationCharLeft} characters left</div>
                    <button
                        disabled={locationDisabler}
                        className="save"
                        type='submit'>
                        save
                            </button>
                    <button
                        className="cancel"
                        type="button"
                        onClick={() => this.flagChange('locationFlag')}>
                        cancel
                            </button>
                </form>
            }

            if (!this.state.bioFlag) {
                bio = <div className='bio-output'>
                    {bioAdded}
                    <div
                        className="bio"
                        onClick={() => this.flagChange('bioFlag')}
                    >
                        <br />
                        {bioUpdater}
                    </div>
                </div>
            } else {
                let textValue = `${this.state.bio}`
                bio = <form
                    className="artist-form"
                    onSubmit={this.handleSubmit.bind(this)}
                >
                    <textarea
                        maxLength="400"
                        placeholder="Plain text only, no HTML."
                        onChange={this.handleChange('bio')}
                        className="bio-input"
                        type="text"
                        value={textValue}
                    >
                    </textarea>
                    <div className="count">{bioCharLeft} characters left</div>

                    <button
                        disabled={bioDisabler}
                        className="save"
                        type='submit'>save
                    </button>
                    <button
                        className="cancel"
                        type="button"
                        onClick={() => this.flagChange('bioFlag')}>
                        cancel
                    </button>
                </form>
            }
        }


        let changeImage;
        let currentUserImage;

        if ( this.state.user.id !== this.props.currentUser){
            location = <p className='side-location'>{this.state.location}</p>
            bio = <p className='side-bio'>{this.state.bio}</p>
            currentUserImage = image;
            
        } else {

            currentUserImage = '';
            changeImage = <div>
                <input
                    id="user-image"
                    type="file"
                    onChange={this.imageSubmit.bind(this)}
                />
                <div className="change-image">&#215;</div>

                
            </div>
        }

        // console.log('this.props ', this.props)
        let onMusicPage = false;
        let onStoriesPage = false;

        if (this.props.match.path.includes('stories')) {
            onStoriesPage = 'on-page';
            onMusicPage = false;
        } else {
            onMusicPage = 'on-page';
            onStoriesPage = false;

        }

        if (this.state.spinnerShow) {
            return (
                <div className="spinner">
                    <i className="fas fa-compass fa-spin"></i>
                    {/* <div className='spinner-space'></div> */}
                </div>
            )

        } else {
            return (
                <div className='artist-home-container'>
                    <img className='cover-art-header' src={`${this.state.user.userImg}`} alt="" />
                    <div className='item-nav-bar'>
                        <div
                            className={`link nav-music  ${onMusicPage}`}
                        // onClick={() => this.switchToMusic()}
                        >
                            {/* <Link to={`/artists/${this.state.item.owner_id}/music/${this.state.item.id}`}> */}
                            music
                    {/* </Link> */}

                        </div>
                        <div
                            className={`link nav-stories ${onStoriesPage}`}
                            onClick={() => this.switchToStories()}
                        >

                            {/* <Link to={`/artists/${this.state.user.id}/stories`}> */}
                            stories
                    {/* </Link> */}

                        </div>
                    </div>

                    <div className='artist-home'>
                        <br />
                        <br />
                        <br />
                        <div>
                            {component}
                            <div className="sidebar">
                                <div className="about">

                                    <div className="image">
                                        {image}
                                        {changeImage}
                                    </div>
                                    <div className={`larger-user-image ${largerUserImage}`}>
                                        {currentUserImage}
                                    </div>
                                    <div className="username">
                                        {this.state.user.username}
                                    </div>

                                    {location}
                                    {bio}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* {/* <MusicPlayer items={items} /> */}
                </div>
            )
        }


        
    }
}


export default ArtistHomepage