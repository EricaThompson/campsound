import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../search/search';

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

    closeDropdown(){
        if (this.state.authDropdown){
            this.setState({authDropdown: false})
        }
    }

    logoutRefresh(){
        this.props.logout()
        // this.setState({authDropdown: false})
    }

    // signupRefresh(){
    //     this.setState({loggedIn: true})
    //     window.location.reload()
    // }

    toggleDropdown(){
        this.setState({authDropdown: !this.state.authDropdown})
    }

    render(){
        if (this.props.match.url != "/"){
            this.closeDropdown()
        }
        
    



        let auth;
        let avatar;
        let signup = null;
        let authNav = null;
        let loggedIn;   
        let view;

        if (this.props.currentUser){
            if (this.props.currentUser.user_type === 'fan'){
                console.log(this.props.currentUser.user_type)

                view = <div className="auth-nav">
                    
                        <div onClick={() => this.toggleDropdown()}>

                            <p>{this.props.currentUser.username}
                                <img
                                    className="avatar"
                                    src={this.props.currentUser.userImg}
                                />
                            </p>

                    
                        </div>
                        <br />

                    <Link
                        to={`/users/${this.props.currentUser.id}/stories/story/new`}>
                        <p>
                            <span
                                onClick={() => setTimeout(() => location.reload(), 200)}>
                                add new story
                                </span>
                        </p>
                    </Link>    
                    
                    <Link
                        to={`/page/about`}>
                        <p>
                            <span
                                onClick={() => this.props.history.push('/page/about')}>
                                about
                                </span>
                        </p>
                    </Link>
                    <Link
                        to={`/`}>
                        <p>
                            <span
                                onClick={() => this.logoutRefresh()}>
                                logout
                            </span>
                        </p>
                    </Link>

                </div>
            } else {
                view = <div className="auth-nav">
                    <Link to={`/users/${this.props.currentUser.id}`}>
                        <div onClick={() => this.toggleDropdown()}>

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
                            <span
                                onClick={() => setTimeout(() => location.reload(), 200)}>
                                add new song
                                </span>
                        </p>
                    </Link>
                    <Link
                        to={`/users/${this.props.currentUser.id}/stories/story/new`}>
                        <p>
                            <span
                                onClick={() => setTimeout(() => location.reload(), 200)}>
                                add new story
                                </span>
                        </p>
                    </Link>
                    <Link
                        to={`/page/about`}>
                        <p>
                            <span
                                onClick={() => this.props.history.push('/page/about')}>
                                about
                                </span>
                        </p>
                    </Link>
                    <Link
                        to={`/`}>
                        <p>
                            <span
                                onClick={() => this.logoutRefresh()}>
                                logout
                            </span>
                        </p>
                    </Link>

                </div>
            }


        }

        

        

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
                    
            authNav = view

            loggedIn = 'logged-in'
                        
        } else {
            auth = <p onClick={() => this.props.openModal('login')}>log in</p> 
            signup = <p onClick={() => this.props.openModal('type-signup')}>
                        sign up
                        </p>
            avatar = ''
        }

        if (!this.state.authDropdown){
            authNav = null;
        }

        // if(this.props.currentUser){
        //     console.log('currentUser',this.props.currentUser)
        // }

        if (!this.props.currentUser){
            return (
                <div className={`nav-bar nav-${loggedIn}`}>
                    <div className="nav-top">
                        <Link to="/"><h1 className={`logo logo-${loggedIn}`}>🏕 campsound</h1></Link>
                        <Search currentUser={this.props.currentUser} />

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
                                    Announcement!
                            </p>
                                <p className="announcement">
                                    Welcome to my clone of bandcamp.com!
                                    My social links are in the footer!
                                    -erica
                            </p>
                                {/* <p onClick={() => this.props.openModal('type-signup')}> */}
                                {signup}
                                {/* </p> */}
                                {auth}
                                {avatar}
                                {authNav}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`nav-bar nav-${loggedIn}`}>
                    <div className="nav-top">
                        
                        <Link to="/"><h1 className={`logo logo-${loggedIn}`}>🏕 campsound</h1></Link>
                        <Search currentUser={this.props.currentUser} />

                    
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
                                <div className={`auth-links auth-links-${loggedIn} right-side-${loggedIn}`}>
                                    <p
                                        className="announce"
                                    >
                                        Announcement!
                                </p>
                                    <p className="announcement">
                                        Welcome to my clone of bandcamp.com!
                                        My social links are in the footer!
                                        -erica
                                </p>
                                    {/* <p onClick={() => this.props.openModal('type-signup')}> */}
                                    {signup}
                                    {/* </p> */}
                                    {auth}
                                    {avatar}
                                    {authNav}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    
    }
}

export default NavBar;