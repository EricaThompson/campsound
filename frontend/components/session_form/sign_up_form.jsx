import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
        this.props.signupUser({user:this.state})
            .then(this.props.closeModal)
            // .then(setTimeout(() => location.reload(), 500))
    }

    render() {
        return (
            <div className="session-form-box">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="title" >Sign Up for {this.props.formType}</h1>
                    <label className="session-label shift-left">Artist name</label>
                    <input type="text" defaultValue='Add to db?'/>
                    < br/>
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
                    <p className="error">{this.props.errors.responseJSON}</p>
                    < br />
                    <br />
                    <div className='session-helper'>
                        <p className="top-helper"><input className="checkbox" type="checkbox" />I have read and agree to the <a href="#">Terms of Use</a>.</p>
                        <button className="submit-button" type="submit">Sign up</button>
                        <p className="bottom-helper">Already have an account? <a>Log in</a>.</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignUpForm);
