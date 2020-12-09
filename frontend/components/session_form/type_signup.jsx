import React from 'react';
class TypeSignup extends React.Component {

    render() {
        return (
            <div className="session-form-box">
                <h3 className="title">Sign up for a Campsound account</h3>
                <p className="session-helper type">
                    Sell directly to your fans with total
                    control over your music and pricing.
                    Easy access to your customers’ data,
                    real-time stats, music chart reporting,
                    and more. 
                    <a className="type-link" href=""> learn more</a>
                </p>
                <p
                    className="type-button" 
                    onClick={()=>this.props.openModal('signup')}>
                    Sign up as an artist
                </p>
            </div>
        );
    }
}

export default TypeSignup;
