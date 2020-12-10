import React from 'react';
import { connect } from 'react-redux';
import ArtistHomepage from './artist_homepage';

import { logoutUser } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistHomepage);