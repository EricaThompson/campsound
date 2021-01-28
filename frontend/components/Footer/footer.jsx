import React from 'react';
import {withRouter} from 'react-router'

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
      render(){

          return (<footer>
              <div
                onClick={()=>this.props.history.replace('/')}
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

export default withRouter(Footer);