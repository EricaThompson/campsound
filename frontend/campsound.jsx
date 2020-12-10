import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import { signup, login, logout, allUsers } from './util/session_api_util';
import { createItem, readItem, readAllItems, updateItem, deleteItem } from './util/items_api_util';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root);
});

window.signup = signup;
window.allUsers = allUsers;
window.login = login;
window.logout = logout;

window.createItem = createItem;
window.readItem = readItem;
window.readAllItems = readAllItems;
window.updateItem = updateItem;
window.deleteItem = deleteItem;