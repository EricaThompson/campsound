import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { genreSearch, browseAll, anySearch } from '../../actions/item_actions';

import { signupUser, loginUser, logoutUser, retrieveUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    // debugger
    return {
        currentUser: state.users[state.session.currentUser],
        user: state.users[state.session.currentUser],
        ui: state.ui
    }
};

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signupUser(user)),
    login: (user) => dispatch(loginUser(user)),
    logout: () => dispatch(logoutUser()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    retrieveUser: (userId)=>dispatch(retrieveUser(userId)),
    genreSearch: (genre)=> dispatch(genreSearch(genre)), 
    browseAll: ()=> dispatch(browseAll()),  
    anySearch: (term)=> dispatch(anySearch(term)), 
    readAllItems: (userId)=> dispatch(readAllItems(userId))

})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);