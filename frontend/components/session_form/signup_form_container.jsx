import { connect } from 'react-redux';
import React from 'react';
import { signupUser } from '../../actions/session';

import SignUpForm from './sign_up_form';

const mapStateToProps = () => {
    return {
        formType: 'an Artist Account',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signupUser: (user) => dispatch(signupUser(user)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
