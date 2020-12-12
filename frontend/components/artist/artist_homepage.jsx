import React from 'react';
import { Link } from 'react-router-dom';
import ZeroItems from './zero_items';

class ArtistHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null
        }
    }

    componentDidMount() {
        this.setState({ img: this.props.user.userImg })
    }

    refresh(){
        this.setState({})
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[user_img]', e.currentTarget.files[0]);
        this.props.updateUser(formData, this.props.currentUser)
        this.refresh()
    }



    render(){

        let component = <ZeroItems/>
        console.log("state",this.props.user.userImg)
        let image = <img className="image" src={this.state.img} alt=""/>



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
                            {/* <label htmlFor="user-image">add artist photo</label> */}
                            {/* <label htmlFor="user-image">↻</label> */}
                            <input 
                                id="user-image" 
                                type="file" 
                                onChange={this.handleSubmit.bind(this)}
                            />
                            <div className="change-image">↻</div>
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