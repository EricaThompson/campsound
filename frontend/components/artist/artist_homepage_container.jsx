import React from 'react';
import { connect } from 'react-redux';
import ArtistHomepage from './artist_homepage';

import { logoutUser, updateUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { 
    readAllUserItems, 
    readItem, 
    createItem, 
    updateItem, 
    deleteItem } from '../../actions/item_actions';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    user: state.users[state.session.currentUser],
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    readAllUserItems: (userId) => dispatch(readAllUserItems(userId)),
    readItem: (itemId) => dispatch(readItem(itemId)),
    createItem: (item) => dispatch(createItem(item)),
    updateItem: (item) => dispatch(updateItem(item)),
    deleteItem: (itemId) => dispatch(deleteItem(itemId)),
    updateUser: (user, id) => dispatch(updateUser(user, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistHomepage);