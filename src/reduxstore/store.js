import { createStore } from 'redux';
import myReducer from './Reducer';
import { loadState, saveState } from '../Components/LocalStorage';

// Load the initial state from local storage
const persistedState = loadState();

// Create the Redux store with the initial state
const store = createStore(
  myReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Subscribe to store updates and save the state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
