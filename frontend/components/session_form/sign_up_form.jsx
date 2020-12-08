import React from 'react';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

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
        // const user = Object.assign({}, this.state);
        // this.props.processForm(user).then(this.props.closeModal);

    }

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
                {/* <h3>Sign up for a CampSound account &#10007;</h3>
                <button onClick={this.props.closeModal}>Sign up as an artist</button>
                <p>Sell directly to your fans with total 
                    control over your music and pricing. 
                    Easy access to your customers’ data, 
                    real-time stats, music chart reporting, 
                    and more. learn more
                </p> */}

                




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

export default withRouter(SignUpForm);
