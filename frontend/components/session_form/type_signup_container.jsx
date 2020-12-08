import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

import TypeSignup from './type_signup';

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
    };
};

export default connect(null, mapDispatchToProps)(TypeSignup);
