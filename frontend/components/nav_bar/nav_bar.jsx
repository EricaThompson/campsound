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
        <div>
            <p>Hello, {window.currentUser.username}</p>
            <button onClick={this.logoutRefresh}>Log Out</button>
        </div>

    ) : (
            <div>
                <button onClick={()=>this.props.openModal('type-signup')}>sign up</button>  
                <button onClick={()=>this.props.openModal('login')}>log In</button> 
            </div>
        );
    
    return (
        <div>
            <h1>🏕 CampSound</h1>
            {display}
        </div>
    )
    }
}

export default NavBar;