import React from 'react';
// import { Link } from 'react-router-dom'

// export default ({ logout, openModal, closeModal }) => {
class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.logoutRefresh = this.logoutRefresh.bind(this)
    }

    logoutRefresh(){
        this.props.logout()
        setTimeout(() => location.reload(), 500)
    }

    render(){
    const display = window.currentUser ? (
        <div className='auth-links'>
            <p className="announce">Announcements</p>
            <p>Hello, {window.currentUser.username}</p>
            <button onClick={this.logoutRefresh}>Log Out</button>
        </div >

    ) : (
            <div className="nav-bottom">
                <h2>Discover amazing new music and <span className="support">directly support</span> the artists who make it.</h2>
                <div className='auth-links'>
                    <p className="announce">Announcements</p>
                    <p onClick={()=>this.props.openModal('type-signup')}>sign up</p>  
                    <p onClick={()=>this.props.openModal('login')}>log in</p> 
                </div>
            </div>
        );
    
    return (
            <div className="nav-bar">
                <div className="nav-top">
                    <h1 className='logo'>🏕 campsound</h1>
                    <div>
                        <input placeholder="Search and discover music" type="text" />
                        <i class="fas fa-search"></i>
                    </div>
                </div>
                <div className='nav-bar-links'>
                    {display}
                </div>
            </div>
    )
    }
}

export default NavBar;