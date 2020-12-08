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
        setTimeout(() => location.reload(), 500)
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up for {this.props.formType}</h1>
                    <label>Artist/Band name</label>
                    <input type="text" defaultValue='Add to db?'/>
                    < br/>
                    <label>Username</label>
                    <input autoFocus onChange={this.handleChange('username')} type="text" value={this.state.username} />
                    < br />
                    <label>Password</label>
                    <input onChange={this.handleChange('password')} type="password" value={this.state.password} />
                    < br />
                    <p><input type="checkbox" />I have read and agree to the Terms of Use.</p>
                    <button type="submit">Sign up</button>
                    <p>Already have an account? Log in.</p>
                </form>
            </div>
        );
    }
}

export default withRouter(SignUpForm);
