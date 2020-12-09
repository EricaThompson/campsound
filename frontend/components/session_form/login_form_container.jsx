import { connect } from 'react-redux';
import React from 'react';
import { loginUser, clearSessionErrors } from '../../actions/session';
import { closeModal, openModal } from '../../actions/modal_actions';



import LogInForm from './log_in_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session
    };
};


const mapDispatchToProps = dispatch => {
    return {
        loginUser: (user) => dispatch(loginUser(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
