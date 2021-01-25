import React from 'react';
import { withRouter } from 'react-router-dom';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
        this.rainLogin = this.rainLogin.bind(this);
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {      
        e.preventDefault();
        this.props.loginUser({ user: this.state })
            if (this.props.currentUser){

                setTimeout(() => location.reload(), 400)
            }
            // .then(()=>this.props.closeModal())
    }

    demoLogin(){
        // e.preventDefault()
        this.setState({ username: 'Demo User', password: 'Password' }, ()=>this.props.loginUser({ user: this.state })
            .then(setTimeout(() => location.reload(), 400))
            .then(this.props.closeModal()))
        
    }

    rainLogin(){
        this.setState({ username: 'Rainforest Records', password: 'Password' }, () => this.props.loginUser({ user: this.state })
            .then(setTimeout(() => location.reload(), 400))
            .then(this.props.closeModal()))
    }

    openAndClear() {
        this.props.openModal("signup")
        this.props.clearSessionErrors()
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
                    <p className="error">{this.props.errors.map(error2 => <div>{error2}</div>)}</p>
                    < br />
                    <button onClick={this.handleSubmit} className="submit-button" type="submit">Log in</button>
                    <div onClick={this.demoLogin}className="submit-button demo">DEMO</div>
                    <div onClick={this.rainLogin} className="submit-button demo">Rainforest Records</div>
                    <div className='session-helper'>
                        <a href="#" onClick={() => this.props.openModal('signup')}>Forgot your password?</a>
                        <p className="change-auth">Don't have an account? 
                        Sign up as <a href="#" onClick={()=>this.openAndClear()}>an artist</a>.</p>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default withRouter(LogInForm);
