import React from 'react';
import {withRouter} from 'react-router';
import {logoutUser} from '../../actions/session_actions';
class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    logoutRefresh() {
        logoutUser()
        // this.setState({authDropdown: false})
    }
    render(){
        // console.log(this.props)
        if ((this.props.match.isExact)){
            // console.log('home')
            return (
    
                <div className="footer">
                    <div className='left-column'>
                        <ul>
                            <li
                                className='link'
                                onClick={() => this.props.history.push('/page/about')}
                                >
                                About</li>
                            <li
                                className='link'
                                onClick={() => this.props.history.push('/page/stories')}
                            >
                                Campsound Daily</li>
                            {/* <li>Contact</li> */}
                            {/* <li
                                className='link'
                                onClick={() => logoutUser()}
                            >Log out</li> */}
                        </ul>
                    </div>
                    <div className="links">
                        <a target="_blank" href="https://github.com/EricaThompson"><i className="fab fa-github"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/ericamt/"><i className="fab fa-linkedin"></i></a>
                        <p>ericathompson.io</p>
                    </div>
                </div>
            )

        } else {
            // console.log('not home')

            return (<footer>
                <div
                onClick={()=>this.props.history.push('/')}
                    id='bottom-logo'
                    className='logo link'>
                    🏕campsound
                                    </div>
                <div className='short-footer'>
                    <div className="links">

                        <a target="_blank" href="https://github.com/EricaThompson"><i className="fab fa-github"></i></a>
                        {/* <a href=""><i className="fab fa-twitter"></i></a> */}
                        {/* <a href=""><i className="fas fa-at"></i></a> */}
                        <a target="_blank" href="https://www.linkedin.com/in/ericamt/"><i className="fab fa-linkedin"></i></a>
                        {/* <p>ericathompson.io</p> */}
                    </div>
                </div>
            </footer>)
            }
        }

}

export default withRouter(Footer);