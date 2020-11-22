import configureStore from './store/configureStore';
import { loadBugs } from './store/bugs';

const store = configureStore();

store.dispatch(loadBugs());
