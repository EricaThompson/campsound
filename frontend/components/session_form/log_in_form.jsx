import React from 'react';
import { withRouter } from 'react-router-dom';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Demo User',
            password: 'Password'
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
        this.props.loginUser({ user: this.state })
            .then(this.props.closeModal)
            .then(setTimeout(() => location.reload(), 200))
    }

    render() {
        
        return (
            <div className="signup-form-container">
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input 
                        autoFocus 
                        onChange={this.handleChange('username')} 
                        type="text" 
                        value={this.state.username}
                    />
                    < br />
                    <label>Password</label>
                    <input 
                        onChange={this.handleChange('password')} 
                        type="password" 
                        value={this.state.password}
                    />
                    < br/>
                    {this.props.errors.responseJSON}
                    < br />
                    <button type="submit">Log in</button>
                    <p>Forgot your password?</p>
                    <p>Don't have an account? Sign up as an artist.</p>
                    
                </form>
            </div>
        );
    }
}

export default withRouter(LogInForm);
