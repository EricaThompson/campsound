import React from 'react';
import { Link } from 'react-router-dom'

export default ({ logout, openModal, closeModal }) => {

    const display = window.currentUser ? (
        <div>
            <p>Hello, {window.currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>

    ) : (
            <div>
                <button onClick={()=>openModal('type-signup')}>sign up</button>  
                <button onClick={()=>openModal('login')}>log In</button> 
            </div>
        );

    return (
        <div>
            <h1>🏕 CampSound</h1>
            {display}
        </div>
    )
}

// export default NavBar;