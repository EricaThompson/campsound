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
            <p>Hello, {window.currentUser.username}</p>
            <button onClick={this.logoutRefresh}>Log Out</button>
        </div >

    ) : (
            <div className='auth-links'>
                <p onClick={()=>this.props.openModal('type-signup')}>sign up</p>  
                <p onClick={()=>this.props.openModal('login')}>log in</p> 
            </div>
        );
    
    return (
            <div>
                <p className="announce">Announcement</p>
                <div className='nav-bar'>
                    <h1 className='logo'>🏕 campsound</h1>
                    {display}
                </div>
            </div>
    )
    }
}

export default NavBar;