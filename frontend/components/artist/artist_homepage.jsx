import React from 'react';
import { Link } from 'react-router-dom';
import ZeroItems from './zero_items';

class ArtistHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null,
            image: this.props.user.userImg,
            locationFlag: false,
            location: '',
            bioFlag: false,
            bio: ''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[user_img]', e.currentTarget.files[0]);
        formData.append('user[location]', this.state.location)
        formData.append('user[bio]', this.state.bio)
        this.props.updateUser(formData, this.props.currentUser)
    }

    flagChange(val){
        if (val === "locationFlag"){
            this.setState({ [val]: !this.state.locationFlag})
            this.setState({location: ''})
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

        let component = <ZeroItems/>
        let image = <img 
                className="image" 
                src={this.props.user.userImg} 
                alt=""
            />
        
        let location = null;
        let bio = null;
        let locationDisabler = true;
        let bioDisabler = true;

        let locationCharCount = this.state.location.length;
        let locationCharLeft = 35 - locationCharCount;
        let bioCharCount = this.state.bio.length;
        let bioCharLeft = 400 - bioCharCount;

        if (this.state.location.length > 0){
            locationDisabler = false
        } else {
            locationDisabler = true
        }

        if (this.state.bio.length > 0) {
            bioDisabler = false
        } else {
            bioDisabler = true
        }

        if (!this.state.locationFlag) {
            location = <div 
                            onClick={()=>this.flagChange('locationFlag')} 
                            className="location">
                                add location
                        </div>
        } else {
            location = <form 
                            className="artist-form" 
                            onSubmit={() => this.flagChange('locationFlag')} 
                        >
                <input 
                    maxlength="35" 
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
            bio = <div 
                        onClick={() => this.flagChange('bioFlag')} 
                        className="bio">
                            add artist bio
                </div>
        } else {
            bio = <form 
                className="artist-form" 
                onSubmit={() => this.flagChange('bioFlag')} 
                >
                    <textarea 
                        maxlength="400" 
                        placeholder="Plain text only, no HTML." 
                        onChange={this.handleChange('bio')} 
                        className="bio-input" 
                        type="text" 
                        value={this.state.bio} 
                    />
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

        return (
            <div className='artist-home'>
                <br />
                <br />
                {component}
                <br />
                <br />
                <div className="sidebar">
                    <div className="about">
                        <div className="image">
                            {image}
                            <input 
                                id="user-image" 
                                type="file" 
                                onChange={this.handleSubmit.bind(this)}
                            />
                            <div className="change-image">↻</div>
                        </div>
                        <div 
                            className="username">
                                {this.props.user.username}
                        </div>
                        {location}
                        {bio}
                    </div>
                </div>
            </div>
        )
    }
}


export default ArtistHomepage