import { createStore } from 'redux';
import notesApp from 'reducers';

const store = createStore(notesApp);

export default store;
