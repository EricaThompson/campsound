import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { signupUser, loginUser, logoutUser } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal_actions';

import SignUpForm from './sign_up_form';

const mapStateToProps = ({ errors }) => {
    return {
        formType: 'an Artist Account',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signupUser: (user) => dispatch(signupUser(user)),
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
