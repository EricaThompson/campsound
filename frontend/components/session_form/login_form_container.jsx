import { connect } from 'react-redux';
import React from 'react';
import {loginUser} from '../../actions/session';

import LogInForm from './log_in_form';

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (user) => dispatch(loginUser(user)),
    };
};

export default connect(null, mapDispatchToProps)(LogInForm);
