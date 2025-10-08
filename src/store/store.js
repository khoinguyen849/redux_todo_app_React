import { createStore } from "redux";
import todoReducer from "../reducers/todoReducer";
import { loadState, saveState, throttle } from "../utils/localStorage";

// Load persisted state from localStorage
const persistedState = loadState();

// Create store with persisted state if available
const store = createStore(todoReducer, persistedState);

// Subscribe to store changes and save to localStorage
const throttledSaveState = throttle(() => {
  saveState(store.getState());
}, 1000); 

store.subscribe(throttledSaveState);

export default store;
