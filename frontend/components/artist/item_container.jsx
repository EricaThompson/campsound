import React from 'react';
import { connect } from 'react-redux';
import Item from './item';

// import { updateUser } from '../../actions/session_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';
import {
    readAllUserItems,
    readItem,
    // createItem,
    // updateItem,
    deleteItem
} from '../../actions/item_actions';

// import { createItem } from '../../util/items_api_util';

const mapStateToProps = state => ({
    currentUserId: state.session.currentUser,
    user: state.users[state.session.currentUser],
    currentItemId: state.items.currentItemId,
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    // logout: () => dispatch(logoutUser()),
    // openModal: (modal) => dispatch(openModal(modal)),
    // closeModal: () => dispatch(closeModal()),
    readAllUserItems: (userId) => dispatch(readAllUserItems(userId)),
    readItem: (userId, itemId) => dispatch(readItem(userId, itemId)),
    // createItem: (userId, item) => dispatch(createItem(userId, item)),
    // updateItem: (userId, item) => dispatch(updateItem(userId, item)),
    deleteItem: (userId, itemId) => dispatch(deleteItem(userId, itemId)),
    // updateUser: (user, id) => dispatch(updateUser(user, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);