import { createStore } from "redux";
import todoReducer from "../reducers/todoReducer";
import { loadState, saveState, throttle } from "../utils/localStorage";

// Load persisted state from localStorage
const persistedState = loadState();

// Create store with persisted state if available
const store = createStore(todoReducer, persistedState);

// Subscribe to store changes and save to localStorage
// Throttle saves to avoid excessive localStorage writes
const throttledSaveState = throttle(() => {
  saveState(store.getState());
}, 1000); // Save at most once per second

store.subscribe(throttledSaveState);

export default store;
