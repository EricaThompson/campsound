import React from 'react';
import { connect } from 'react-redux';
// import { anySearch } from '../../util/search_api_util';
import { genreSearch, browseAll, anySearch } from '../../actions/item_actions';
import Results from './results';



const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser,
        user: state.users[state.session.currentUser],
        items: state.items
    };

}


const mapDispatchToProps = dispatch => ({
    readAllItems: (userId) => dispatch(readAllItems(userId)),
    genreSearch: (genre) => dispatch(genreSearch(genre)),
    browseAll: () => dispatch(browseAll()),
    anySearch: (term) => dispatch(anySearch(term))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);