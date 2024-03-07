export function useDebounce(func: (arg: string) => void, delay: number) {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  const debounced = (args: string) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(args[0]);
      timerId = null;
    }, delay);
  };

  debounced.cancel = function () {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  };

  return debounced;
}

export default useDebounce;
