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
            // .then(setTimeout(() => location.reload(), 200))
    }

    render() {
        return (
            <div className="session-form-box">
                <h1 className="title" >Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="session-label">Username</label>
                    <input
                        className="center" 
                        autoFocus 
                        onChange={this.handleChange('username')} 
                        type="text" 
                        value={this.state.username}
                    />
                    <br />
                    <br />
                    <label className="session-label" >Password</label>
                    <input
                        className="center" 
                        onChange={this.handleChange('password')} 
                        type="password" 
                        value={this.state.password}
                    />
                    < br/>
                    <p className="error">{this.props.errors.responseJSON}</p>
                    < br />
                    <button className="submit-button" type="submit">Log in</button>
                    <div className='session-helper'>
                        <a href="#" onClick={() => this.props.openModal('signup')}>Forgot your password?</a>
                        <p className="change-auth">Don't have an account? 
                        Sign up as <a href="#" onClick={()=>this.props.openModal('signup')}>an artist</a>.</p>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default withRouter(LogInForm);
