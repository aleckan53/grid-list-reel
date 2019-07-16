import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../Card';

describe('Card component', () => {
  it('matches the snapshot', () => {
    const data =   {
      img: 'URL',
      name: 'Name',
      status: 'active',
      total: 35000,
      started: '2017-5-1',
      perDay: 15,
      saved: 12000,
      percentSaved: 34,
    };
    const root = document.createElement('div');
    ReactDOM.render(<Card data={data}/>, root);
    expect(root).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(root);
  });
});