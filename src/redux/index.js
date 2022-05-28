import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import photos from "./photos";
import favorites from "./favorites";


const logger = createLogger({
    diff: true,
    collapsed: true,
});

const rootReducer = combineReducers({
    photos,
    favorites
});

let preloadedState;

const localStore = localStorage.getItem("favorites");

if (localStore !== null) {
    preloadedState = {
        favorites: JSON.parse(localStorage.getItem("favorites")),
    };
}

export const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
);


store.subscribe(() => {
    localStorage.setItem("favorites", JSON.stringify(store.getState().favorites));
});
// localStorage.setItem("favorites", JSON.stringify(store.getState().favorites));

