import React from 'react';
import ReactDOM from 'react-dom';
import Filter from '../Filter'

describe('Filter component', () => {
  it('matches the snapshot', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Filter/>, root);
    expect(root).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(root);
  });
});