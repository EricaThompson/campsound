import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import { openModal } from '../../actions/modal_actions';
import { genreSearch } from '../../actions/item_actions';

import {browseAll} from '../../actions/item_actions';

const mapStateToProps = state => {
    // console.log(state.items)
    return {
        currentUser: state.session.currentUser,
        user: state.users[state.session.currentUser],
        items: state.items
    };

}


const mapDispatchToProps = dispatch => ({
    browseAll: () => dispatch(browseAll()),
    openModal: (modal) => dispatch(openModal(modal)),
    genreSearch: (genre) => dispatch(genreSearch(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);