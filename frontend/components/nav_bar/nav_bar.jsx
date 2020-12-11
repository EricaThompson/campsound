import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            img: ''
        }
        this.logoutRefresh = this.logoutRefresh.bind(this)
    }

    logoutRefresh(){
        this.props.logout()
        // setTimeout(() => location.reload(), 200)
    }

    setImage(){
        if (this.props.currentUser.userImg !== ''){}
        this.setState({img: this.props.currentUser.userImg})
    }

    // componentDidMount(){
    //     this.setState({img: this.props.user.userImg})
    // }
    

    render(){
        let auth;
        let avatar;
        let signup = null;
        let authNav = null;

        if (this.props.user){
            avatar = <Link to="/"> <div onClick={() => this.logoutRefresh()} className="avatar"><img className="avatar" src={this.props.user.userImg} /></div> </Link>
            authNav = <Link to='/1'><div onClick={()=>setTimeout(()=>location.reload(), 200)}>artist page</div></Link>
        } else {
            auth = <p onClick={() => this.props.openModal('login')}>log in</p> 
            signup = 'sign up'
            avatar = ''
        }
    return (
            <div className="nav-bar">
                <div className="nav-top">
                    <h1 className='logo'>🏕 campsound</h1>
                    <div>
                        <input placeholder="Search and discover music" type="text" />
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <div className='nav-bar-links'>
                    <div className="nav-bottom">
                        <h2 className="slogan">
                            Discover amazing new music and 
                            <span className="support"> directly support </span> 
                            the artists who make it.
                        </h2>
                        <div className='auth-links'>
                            <p className="announce">Announcements</p>
                            <p onClick={() => this.props.openModal('type-signup')}>{signup}</p>
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