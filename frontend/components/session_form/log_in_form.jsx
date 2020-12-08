import React from 'react';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

class LogInForm extends React.Component {
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
        this.props.loginUser({ user: this.state })
        setTimeout(()=>location.reload(), 500)

        // const user = Object.assign({}, this.state);
        // this.props.processForm(user).then(this.props.closeModal);
    }

    // modalClose() {
    //     
    // }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input autoFocus onChange={this.handleChange('username')} type="text" value={this.state.username}/>
                    < br />
                    <label>Password</label>
                    <input onChange={this.handleChange('password')} type="password" value={this.state.password}/>
                    < br />
                    <button type="submit">Log in</button>
                    <p>Forgot your password?</p>
                    <p>Don't have an account? Sign up as an artist.</p>
                    
                </form>




                {/* <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to BenchBnB!
          <br />
          Please {this.props.formType} or {this.props.otherForm}
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Username:
              <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form> */}
            </div>
        );
    }
}

export default withRouter(LogInForm);
