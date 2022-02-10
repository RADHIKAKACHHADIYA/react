import { createStore } from 'redux';
import rootReducer from './reducer';

const configareStore = () => {
    const store = createStore (
        rootReducer
    )
    return store;
}

export default configareStore;