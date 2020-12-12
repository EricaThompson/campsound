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
            location: ''
        }
    }

    // componentDidMount() {
    //     this.setState({ img: this.props.user.userImg })
    // }

    // refresh(){
    //     this.setState({})
    // }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[user_img]', e.currentTarget.files[0]);
        formData.append('user[location]', this.state.location)
        this.props.updateUser(formData, this.props.currentUser)
        // this.refresh()
    }

    locationFlagChange(){
        this.setState({locationFlag: !this.state.locationFlag})
    }

    handleChange(val){
        return e => {
            this.setState({[val]: e.currentTarget.value})
        }
    }

    render(){

        let component = <ZeroItems/>
        let image = <img className="image" src={this.props.user.userImg} alt=""/>
        
        let location = null;
        let disabler = true;
        

        if (this.state.location){
            disabler = true
        } else {
            disabler = false
        }
        // const variableAttr = {[disabled]: disabled}

        if (!this.state.locationFlag) {
            location = <div onClick={()=>this.locationFlagChange()} className="location">add location</div>
        } else {
            location = <form className="location-form" onSubmit={() => this.locationFlagChange()} >
                <input onChange={this.handleChange('location')} className="location-input" type="text" value={this.state.location}/>
                <br />
                <button disabled={`${[disabler]}`} className="save" type='submit'>save</button> <button className="cancel" type="button" onClick={() => this.locationFlagChange()}>cancel</button>
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
                        <div className="username">{this.props.user.username}</div>
                        {location}
                        <div className="bio">add artist bio</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ArtistHomepage