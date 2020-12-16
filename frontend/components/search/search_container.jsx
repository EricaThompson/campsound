import React from 'react';
import { connect } from 'react-redux';
import Search from './search';



const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser,
        user: state.users[state.session.currentUser],
        items: state.items
    };

}


const mapDispatchToProps = dispatch => ({
    readAllItems: (userId) => dispatch(readAllItems(userId)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);