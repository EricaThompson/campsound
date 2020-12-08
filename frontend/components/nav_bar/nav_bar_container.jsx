import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

import { signupUser, loginUser, logoutUser } from '../../actions/session';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signupUser(user)),
    login: (user) => dispatch(loginUser(user)),
    logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);