import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

import { signupUser, loginUser, logoutUser, retrieveUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    id: state.session.currentUser.id,
    user: state.user
    // img: this.state.user
    // test: 'test'
});

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signupUser(user)),
    login: (user) => dispatch(loginUser(user)),
    logout: () => dispatch(logoutUser()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    retrieveUser: (user)=>dispatch(retrieveUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);