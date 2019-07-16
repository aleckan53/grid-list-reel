import React from 'react';
import { mount } from 'enzyme';
import MockPromise from '../../testUtils/mockPromise';
import { fetchData } from '../../service';

import ListView from './ListView';

jest.mock('../../service', () => ({
  fetchData: jest.fn()
}));

let fetchDataPromise;

fetchData.mockImplementation(() => {
  fetchDataPromise = new MockPromise();

  return fetchDataPromise;
});


describe('List component', () => {

  it('fetches and renders list of Cards', async () => {
    const wrapper = mount(<ListView/>);
    const data = [
      {name: 'test1'},
      {name: 'test2'}
    ];
    
    await fetchDataPromise.resolve(data);

    wrapper.update();

    let list = wrapper.find('[data-test-id="list"]');
    expect(list.children()).toHaveLength(2);
  });
});