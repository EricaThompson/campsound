import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            img: '',
            authDropdown: false,
            loggedIn: false,
        }
        this.logoutRefresh = this.logoutRefresh.bind(this)
    }

    componentDidMount(){
        this.setState({ authDropdown: false })
        // console.log(this.props)
        // document.body.scrollTop = 0
        
    }

    logoutRefresh(){
        this.props.logout()
        this.setState({authDropdown: false})
    }

    signupRefresh(){
        this.setState({loggedIn: true})
        window.location.reload()
    }

    toggleDropdown(){
        this.setState({authDropdown: !this.state.authDropdown})
    }

    render(){
        let auth;
        let avatar;
        let signup = null;
        let authNav = null;
        let loggedIn;
        

        if (this.props.currentUser){
            if (!this.state.loggedIn){
                setTimeout(() => {
                    ()=>this.signupRefresh()
                }, 1000);
            }
            // window.location.reload()

            // console.log('currentUser', this.props.currentUser)
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
                        <Link to={`/users/${this.props.currentUser.id}`}>
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

            loggedIn = 'logged-in'
                        
        } else {
            auth = <p onClick={() => this.props.openModal('login')}>log in</p> 
            signup = 'sign up'
            avatar = ''
        }

        if (!this.state.authDropdown){
            authNav = null;
        }

        // if(this.props.currentUser){
        //     console.log('currentUser',this.props.currentUser)
        // }
    return (
            <div className={`nav-bar nav-${loggedIn}`}>
                <div className="nav-top">
                    <Link to="/"><h1 className={`logo logo-${loggedIn}`}>🏕 campsound</h1></Link>
                </div>
                <div className='nav-bar-links'>
                    <div className="nav-bottom ">
                    <h2 className={`slogan support-${loggedIn}`}>
                            Discover amazing new music and 
                            <div className="support"> directly support </div> 
                            the artists who make it.
                        </h2>
                        <p className="support-note">
                            Sign up today!
                        </p>
                        <div className={`auth-links right-side-${loggedIn}`}>
                            <p 
                                className="announce"
                            >
                                Announcements!
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