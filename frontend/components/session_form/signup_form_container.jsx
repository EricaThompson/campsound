import { connect } from 'react-redux';
import React from 'react';
import { signupUser } from '../../actions/session';
import { closeModal } from '../../actions/modal_actions';

import SignUpForm from './sign_up_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'an Artist Account',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signupUser: (user) => dispatch(signupUser(user)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
