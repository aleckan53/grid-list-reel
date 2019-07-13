import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Search from './Search';

describe('Search component', () => {

  it('matches the snapshot', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Search/>, root);
    expect(root).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(root);
  })
})