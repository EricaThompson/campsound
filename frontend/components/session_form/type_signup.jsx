import React from 'react';
class TypeSignup extends React.Component {

    render() {
        return (
            <div className="signup-form-container">
                <h3>Sign up for a CampSound account &#10007;</h3>
                <button onClick={()=>this.props.openModal('signup')}>Sign up as an artist</button>
                <p>Sell directly to your fans with total
                control over your music and pricing.
                Easy access to your customers’ data,
                real-time stats, music chart reporting,
                and more. learn more
                </p>
            </div>
        );
    }
}

export default TypeSignup;
