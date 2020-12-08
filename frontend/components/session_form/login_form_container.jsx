import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import { signupUser, loginUser, logoutUser } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal_actions';
import LogInForm from './log_in_form';

const mapStateToProps = ({ errors }) => {
    return {
        formType: 'login',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (user) => dispatch(loginUser(user)),
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
