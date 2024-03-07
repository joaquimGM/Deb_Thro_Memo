
import { useDebounce } from '../hooks/useDebounce';

describe('useDebounce', () => {
  it('should execute the function after the specified delay', () => {
    const func = jest.fn();
    const debouncedFunc = useDebounce(func, 500);
  
    jest.useFakeTimers();
  
    debouncedFunc('test');
    expect(func).not.toHaveBeenCalled();
  
    jest.advanceTimersByTime(500);
    expect(func).toHaveBeenCalled();
  
    jest.useRealTimers();
  });
});







