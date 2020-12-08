
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
                <button>sign up</button>
                <button>log In</button>
            </div>
        );


    return (
        <div>
            {display}
        </div>
    )
}

// export default NavBar;