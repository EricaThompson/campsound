import React from 'react';
import {withRouter} from 'react-router'
class TypeSignup extends React.Component {

    render() {
        return (
            <div className="session-form-box">
                <h3 className="title">Sign up for a Campsound account</h3>
                
                <div className="choices">
                    <div className="fan">
                        <div className="art">
                            <div className="circle"></div>
                            <img className="headphones" src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/headphones.png" alt="headphones" />
                        </div>
                        <div className="info">
                            <p
                                className="session-type-button"
                                onClick={() => {

                                    this.props.history.push('/fan')
                                    this.props.openModal('signup')

                                }}
                                >
                                Sign up as a fan
                        </p>
                            <p className="session-helper">
                                Follow your favorite artists, 
                                keep a wishlist, get instant streaming of your 
                                purchases, showcase your collection, and explore 
                                the music of like-minded fans
                            <a className="type-link" onClick={() => this.props.openModal('signup')}> learn more</a>
                            </p>
                        </div>
                    </div>
                    <div className='artist'>
                        <div className="art">
                            <div className="circle"></div>
                            <img className="mic" src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/microphone.png" alt="microphone" />
                        </div>
                        <div className="info">
                            <p
                                className="session-type-button"
                                onClick={() => {

                                    this.props.history.push('/artist')
                                    this.props.openModal('signup')

                                }}
                                >
                                Sign up as an artist
                        </p>
                            <p className="session-helper">
                                Sell directly to your fans with total
                                control over your music and pricing.
                                Easy access to your customers’ data,
                                real-time stats, music chart reporting,
                                and more.
                            <a className="type-link" onClick={() => this.props.openModal('signup')}> learn more</a>
                            </p>
                        </div>
                    </div>
                    <div className="label">
                        <div className="art">
                            <div className="circle"></div>
                            <img className="gramophone" src="https://campsound-dev.s3-us-west-1.amazonaws.com/assets/images/gramophone.png" alt="gramophone" />
                        </div>
                        <div className="info">
                            <p
                                className="session-type-button"
                                onClick={() => {

                                    this.props.history.push('/label')
                                    this.props.openModal('signup')

                                }}
                            >
                                Sign up as a label
                        </p>
                            <p className="session-helper">
                                Unified accounting and stats across all your 
                                artists, a single fulfillment interface for 
                                all your merch, direct payments on a per-release 
                                basis, and a whole lot more.
                            <a 
                                className="type-link"
         
                                
                                > 
                                    learn more
                                </a>
                            </p>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
                
            </div>
        );
    }
}

export default withRouter(TypeSignup);
