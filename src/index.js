import configureStore from './store/configureStore';
import { loadBugs, resolveBug, assignBugToUser } from './store/bugs';

const store = configureStore();

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(resolveBug(2)), 2000);

setTimeout(() => store.dispatch(assignBugToUser(1, 4)), 3000);
