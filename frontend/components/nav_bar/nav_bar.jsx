import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            img: '',
            authDropdown: false
        }
        this.logoutRefresh = this.logoutRefresh.bind(this)
    }

    componentDidMount(){
        this.setState({ authDropdown: false })
    }

    logoutRefresh(){
        this.props.logout()
        this.setState({authDropdown: false})
    }

    toggleDropdown(){
        this.setState({authDropdown: !this.state.authDropdown})
    }

    render(){
        let auth;
        let avatar;
        let signup = null;
        let authNav = null;

        if (this.props.currentUser){
            avatar = 
                        <div 
                            onClick={() => this.toggleDropdown()} 
                            className="avatar">
                                <img 
                                    className="avatar" 
                                    src={this.props.currentUser.userImg} 
                                />
                        </div> 
                    
            authNav = <div className="auth-nav">
                        <Link to={`/artists/${this.props.currentUser.id}`}>
                    <div onClick={()=>this.toggleDropdown()}>
                        
                        <p>{this.props.currentUser.username}
                            <img
                                className="avatar"
                                src={this.props.currentUser.userImg}
                            />
                        </p>

                        <p>
                                {/* className="view-site" */}
                                {/* onClick={()=>setTimeout(()=>location.reload(), 200)}> */}
                                view site

                        </p>

                    </div>
                        <br />
                        </Link>
                        <Link
                            to={`/${this.props.currentUser.id}/new`}>
                            <p>
                                <div
                                    onClick={() => setTimeout(() => location.reload(), 200)}>
                                    add new song
                                </div>  
                            </p>
                        </Link>
                        <Link
                            to={`/users/${this.props.currentUser.id}/stories/story/new`}>
                            <p>
                                <div
                                    onClick={() => setTimeout(() => location.reload(), 200)}>
                                    add new story
                                </div>
                            </p>
                        </Link>
                        <Link
                            to={`/`}>
                            <p>
                            <div
                                onClick={() => this.logoutRefresh()}>
                                logout
                            </div>
                            </p>
                        </Link>

                    </div>
                        
        } else {
            auth = <p onClick={() => this.props.openModal('login')}>log in</p> 
            signup = 'sign up'
            avatar = ''
        }

        if (!this.state.authDropdown){
            authNav = null;
        }
    return (
            <div className="nav-bar">
                <div className="nav-top">
                <Link to="/"><h1 className='logo'>🏕 campsound</h1></Link>
                </div>
                <div className='nav-bar-links'>
                    <div className="nav-bottom">
                        <h2 className="slogan">
                            Discover amazing new music and 
                            <span className="support"> directly support </span> 
                            the artists who make it.
                        </h2>
                        <div className='auth-links'>
                            <p 
                                className="announce"
                            >
                                Announcements
                            </p>
                            <p className="announcement">
                                My social links are in the footer!
                            </p>
                            <p onClick={() => this.props.openModal('type-signup')}>
                                {signup}
                            </p>
                            {auth}
                            {avatar}
                            {authNav}
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}

export default NavBar;