import React from 'react';
import { connect } from 'react-redux';
import ArtistHomepage from './artist_homepage';

import { logoutUser } from '../../actions/session';
import { openModal, closeModal } from '../../actions/modal_actions';
import { 
    readAllItems, 
    readItem, 
    createItem, 
    updateItem, 
    deleteItem } from '../../actions/item_actions';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    readAllItems: () => dispatch(readAllItems()),
    readItem: (itemId) => dispatch(readItem(itemId)),
    createItem: (item) => dispatch(createItem(item)),
    updateItem: (item) => dispatch(updateItem(item)),
    deleteItem: (itemId) => dispatch(deleteItem(itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistHomepage);