import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser.id
            },
            users: {
                [window.currentUser.id]: window.currentUser,
            }
        };
    }
    const store = configureStore(preloadedState);
    window.getState = store.getState;
    ReactDOM.render(<Root store={store} />, root);
});

