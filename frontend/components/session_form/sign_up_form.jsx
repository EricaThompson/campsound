import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            type: this.props.location.pathname.slice(1)

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        // let isSignedUp = false;

        this.props.signupUser({user:this.state})
            .then(()=> {
                // isSignedUp = true
                // setTimeout(() => {
                    // this.props.closeModal()
                    window.location.reload();
                // }, 500);
            
            })

        // if(isSignedUp && this.state.username.length > 0 && this.state.password.length > 5){
        //         this.props.loginUser({ user: this.state })
        //             .then(()=> window.location.reload())
        // }
        
            // .then()
            // .catch(err => console.log('err',err))     
            // .then(this.props.closeModal())
        // setTimeout(() => location.reload(), 400)
        // setTimeout(() => location.reload(), 400)
    }

    openAndClear(){
        this.props.openModal("login")
        this.props.clearSessionErrors()
    }

    render() {
        // console.log('url', )

        let type;

        if (this.props.location.pathname.slice(1) === 'fan'){
            type = 'a fan'
        } else if (this.props.location.pathname.slice(1) === 'label'){
            type = 'a label'
        } else {
            type = 'an artist'
        }

        return (
            <div className="session-form-box">
                <form onSubmit={this.handleSubmit}>
                    {/* <h1 className="title" >Sign up for {this.props.formType}</h1> */}
                    <h1 className="title" >Sign up for {type} account</h1>
                    {/* <label className="session-label shift-left">Artist name</label> */}
                    {/* <input type="text" defaultValue='Add to db?'/> */}
                    < br/>
                    < br />
                    < br />
                    < br />
                    <label className="session-label">Username</label>
                    <input
                        className="center"  
                        autoFocus 
                        onChange={this.handleChange('username')} 
                        type="text" 
                        value={this.state.username} 
                    />
                    < br />
                    <br />
                    <label className="session-label">Password</label>
                    <input
                        className="center"  
                        onChange={this.handleChange('password')} 
                        type="password" 
                        value={this.state.password} 
                    />
                    < br />
                    <br />
                    <div className="error">{this.props.errors.map((error,idx) => <div key={idx}>{error}</div>)}</div>
                    < br />
                    < br />
                    <br />
                    <div className='session-helper'>
                        {/* <p className="top-helper"><input className="checkbox" 
                            type="checkbox" />
                            I have read and agree to the 
                                <a href="#">
                                Terms of Use</a>.
                        </p> */}
                        <button className="submit-button" type="submit">Sign up</button>
                        <p className="bottom-helper">Already have an account? <a onClick={()=>this.openAndClear()}>Log in</a>.</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignUpForm);
