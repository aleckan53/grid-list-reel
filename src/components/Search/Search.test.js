import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Search from './Search';
import { useInput } from './hooks/useInput';
import { testHook } from '../../testUtils/testHook';

describe('Search component', () => {

  it('matches the snapshot', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Search/>, root);
    expect(root).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(root);
  })
})

describe('useInput hook', () => {

  let input;

  beforeEach(() => {
    testHook(() => {
      input = useInput('test', jest.fn(), 0);
    });
  });

  it('should have an onChange function', () => {
    expect(input.onChange).toBeInstanceOf(Function);
  });

  it('should update the value when onChange is called', () => {
    act(() => {
      input.onChange({target: {value: 'test'}});
    });
    expect(input.value).toBe('test');
  });
});