import React from 'react';
import { Link } from 'react-router-dom';

class ZeroItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <h1>This is your music's homepage.</h1>
                <h2 className="slogan">
                    A tabula rasa! Completely unspoiled.
                    Deeply inhale the crisp,
                    clean air, hold it, and then...
                </h2>
                <br />
                <br />
                <div className="add">
                    <Link to="/new"> Add an album or add a track </Link>
                </div>

            </div>
        )
    }
}


export default ZeroItems;