import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { addBug } from '../bugs';
import configureStore from '../configureStore';

describe('bugsSlice', () => {
  it('should handle the addBug action', async () => {
    const bug = { description: 'a' };
    const savedBug = { ...bug, id: 1 };
    const fakeAxios = new MockAdapter(axios);
    fakeAxios.onPost('/bugs').reply(200, savedBug);
    const store = configureStore();
    await store.dispatch(addBug(bug));
    expect(store.getState().entities.bugs.list).toContainEqual(savedBug);
  });
});
