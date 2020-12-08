import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import TypeSignup from './type_signup';

// const mapStateToProps = ({ errors }) => {
//     return {
//         formType: 'signup',
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Sign up
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(null, mapDispatchToProps)(TypeSignup);
