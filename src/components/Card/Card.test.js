import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';

describe('Card component', () => {
  let root = document.createElement('div');

  beforeEach(() => {
    ReactDOM.render(<Card />, root);
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(root);
  })

  it('matches the snapshot', () => {
    expect(root).toMatchSnapshot();
  })
    
});