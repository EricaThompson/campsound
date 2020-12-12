import React from 'react';
import { Link } from 'react-router-dom';

class ZeroItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="zero-items">
                <br />
                <br />
                <h1>This is your music<span>‛</span>s homepage<span 
                    className="period">▪</span>
                </h1>
                
                <h2 className="slogan">
                    A tabula rasa! Completely unspoiled.
                    Deeply inhale the crisp,
                    clean air, hold it, and then...
                </h2>
                <br />
                <br />
                <div className="add">
                    <Link to={`/${this.props.userId}/new`}>
                        <div>Add an album </div>
                    </Link>
                    <Link to={`/${this.props.userId}/new`}>
                        <div className="track">or add a track</div> 
                    </Link>
                    
                </div>

            </div>
        )
    }
}


export default ZeroItems;