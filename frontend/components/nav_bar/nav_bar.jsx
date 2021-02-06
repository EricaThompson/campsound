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

    toggleDropdown() {
        this.setState({ authDropdown: !this.state.authDropdown })
    }


    closeDropdown(){
        this.setState({authDropdown: false})
    }

    openDropdown(){
        this.setState({authDropdown: true})
    }

    logoutRefresh(){
        this.props.logout()
        // this.setState({authDropdown: false})
    }

    // signupRefresh(){
    //     this.setState({loggedIn: true})
    //     window.location.reload()
    // }

    
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
                // console.log(this.props.currentUser.user_type)

                view = <div 
                            className="auth-nav"
                            onMouseEnter={() => this.openDropdown()}
                            onMouseLeave={() => this.closeDropdown()}
                            >
                    
                        <div 
                            // onMouseEnter={() => this.openDropdown()}
                            // onMouseLeave={() => this.closeDropdown()}
                        >

                            <p>{this.props.currentUser.username}
                                <img
                                    className="avatar"
                                    src={this.props.currentUser.userImg}
                                />
                            </p>

                    
                        </div>
                        <br />

                    <Link
                        onClick={() => setTimeout(() => location.reload(), 200)}
                        to={`/users/${this.props.currentUser.id}/stories/story/new`}>
                        <p>
                            <span
                                >
                                add new story
                                </span>
                        </p>
                    </Link>    
                    
                    <Link
                        onClick={() => this.props.history.push('/page/about')}
                        to={`/page/about`}>
                        <p>
                            <span
                                >
                                about
                                </span>
                        </p>
                    </Link>
                    <a
                        onClick={() => this.logoutRefresh()}
                        // to={`/`}
                    >
                        <p>
                            <span
                                // onClick={() => this.logoutRefresh()}
                                >
                                logout
                            </span>
                        </p>
                    </a>

                </div>
            } else {
                view = <div 
                            onMouseEnter={() => this.openDropdown()}
                            onMouseLeave={() => this.closeDropdown()}
                            className="auth-nav"
                
                >
                    <a to={`/users/${this.props.currentUser.id}`}>
                        <div 
                            
                        >

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
                    </a>
                    <Link
                        onClick={() => setTimeout(() => location.reload(), 200)}
                        to={`/${this.props.currentUser.id}/new`}>
                        <p>
                            <span
                                >
                                add new song
                                </span>
                        </p>
                    </Link>
                    <Link
                        onClick={() => setTimeout(() => location.reload(), 200)}
                        to={`/users/${this.props.currentUser.id}/stories/story/new`}>
                        <p>
                            <span
                                onClick={() => setTimeout(() => location.reload(), 200)}>
                                add new story
                                </span>
                        </p>
                    </Link>
                    <Link
                        onClick={() => this.props.history.push('/page/about')}
                        to={`/page/about`}>
                        <p>
                            <span
                                onClick={() => this.props.history.push('/page/about')}>
                                about
                                </span>
                        </p>
                    </Link>
                    <Link
                        onClick={() => this.logoutRefresh()}
                        to={`/`}>
                        <p>
                            <span
                                >
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
                            onMouseEnter={() => this.openDropdown()}
                            onMouseLeave={() => this.closeDropdown()}
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
                        <Link to="/"><h1 className={`logo logo-${loggedIn} link`}>🏕 campsound</h1></Link>
                        <Search currentUser={this.props.currentUser} genreSearch={this.props.genreSearch} browseAll={this.props.browseAll} anySearch={this.props.anySearch} readAllItems={this.props.readAllItems} />

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
                        <Search currentUser={this.props.currentUser} genreSearch={this.props.genreSearch} browseAll={this.props.browseAll} anySearch={this.props.anySearch} readAllItems={this.props.readAllItems} />

                    
                        <div 
                            className='nav-bar-links'
                            // onMouseLeave={() => this.closeDropdown()}    
                        >
                            <div className="nav-bottom ">
                                <h2 className={`slogan support-${loggedIn}`}>
                                    Discover amazing new music and
                                <div className="support"> directly support </div>
                                the artists who make it.
                            </h2>
                                <p className="support-note">
                                    Sign up today!
                            </p>
                                <div 
                                    className={`auth-links auth-links-${loggedIn} right-side-${loggedIn}`}
                                    // onMouseLeave={() => this.closeDropdown()}
                                >
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