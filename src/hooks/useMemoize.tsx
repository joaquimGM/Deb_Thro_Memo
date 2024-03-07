const memo = new Map();

// eslint-disable-next-line @typescript-eslint/ban-types
export const useMemoize = (fn: Function) => {
  return (n: number) => {
    if (memo.has(n)) {
      return memo.get(n);
    } else {
      const result = fn(n);
      memo.set(n, result);
      return result;
    }
  };
};
