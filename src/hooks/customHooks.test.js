import { act } from 'react-dom/test-utils';
import { useInput } from './customHooks';
import { testHook } from './testUtils';

let input;

beforeEach(() => {
  testHook(() => {
    input = useInput('test', jest.fn(), 0);
  });
});

describe('useInput hook', () => {

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