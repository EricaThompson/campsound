import React from 'react';
import { Link } from 'react-router-dom'

export default ({ logout }) => {

    const display = window.currentUser ? (
        <div>
            <p>Hello, {window.currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>

    ) : (
            <div>
                <button>sign Up</button>  
                <button>log In</button> 
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