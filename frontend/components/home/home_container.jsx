import React from 'react';
import { connect } from 'react-redux';
import Home from './home';

import {browseAll} from '../../actions/item_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser,
        user: state.users[state.session.currentUser],
        items: state.items
    };

}


const mapDispatchToProps = dispatch => ({
    browseAll: () => dispatch(browseAll())

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);