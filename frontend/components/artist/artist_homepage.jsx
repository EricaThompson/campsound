import React from 'react';
import { Link } from 'react-router-dom';
import ZeroItems from './zero_items';

class ArtistHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: []
        }
    }

    // uploadImage(){
    //     this.setState({image: e.target.files[0]})
    //     //then send to active storage
    // }

    

    render(){

        let component;
        {/* if (search for db items with the index of user returns zero items){*/ }
                component = <ZeroItems/>
        {/* } else {
                component = <ShowItems>
            }
        */}

        // let userImage;

        // if (currentUser.userImg){

        // }

        console.log("state",this.props.user.userImg)

        let image = '';
        if (this.props.user.userImg.includes('blobs')){
            image = <img id="user-image" src={this.props.user.userImg} alt=""/>
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
                            {/* <label htmlFor="user-image">add artist photo</label>
                            <input id="user-image" type="file" onClick={this.uploadImage} /> */}
                        </div>
                        <div className="username">{this.props.user.username}</div>
                        <div className="location">add location</div>
                        <div className="bio">add artist bio</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ArtistHomepage