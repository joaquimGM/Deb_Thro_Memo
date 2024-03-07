import useThrottle from '../hooks/useThrottle';

describe('useThrottle', () => {
  it('should execute the function immediately and then not until after the specified delay', () => {
    const func = jest.fn();
    const throttledFunc = useThrottle(func, 500);

    jest.useFakeTimers();

    throttledFunc();
    expect(func).toHaveBeenCalled();

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);

    jest.useRealTimers();
  });
});