import { useMemoize } from "../hooks/useMemoize";

const factorialFn = (n: number): number => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialFn(n - 1);
  }
};


describe("memoizedFactorial", () => {
  const memoizedFactorial = useMemoize(factorialFn);
  it("returns the correct factorial for a number", () => {
    expect(memoizedFactorial(0)).toBe(1);
    expect(memoizedFactorial(1)).toBe(1);
    expect(memoizedFactorial(2)).toBe(2);
    expect(memoizedFactorial(3)).toBe(6);
    expect(memoizedFactorial(4)).toBe(24);
    expect(memoizedFactorial(5)).toBe(120);
  });

  it("returns the same result for the same input", () => {
    const result1 = memoizedFactorial(5);
    const result2 = memoizedFactorial(5);
    expect(result1).toBe(result2);
  });
});