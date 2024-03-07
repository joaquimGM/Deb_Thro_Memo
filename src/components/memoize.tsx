import { useState, useEffect } from "react";
import { useMemoize } from "../hooks/useMemoize";

const factorialFn = (n: number): number => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialFn(n - 1);
  }
};

const Memoize = () => {
  const [number, setNumber] = useState(0);
  const [factorial, setFactorial] = useState(1);

  const memoizedFactorial = useMemoize(factorialFn);

  useEffect(() => {
    setFactorial(memoizedFactorial(number));
  }, [number, memoizedFactorial]);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  return (
    <div className="card">
      <h1>Memoization Example</h1>
      <p data-testid="count">Count: {number}</p>
      <p>Factorial: {factorial}</p>
      <button onClick={handleIncrement}>Increment Count</button>
      <h3>
        In computing, memoization or memoisation is an optimization technique
        used primarily to speed up computer programs by storing the results of
        expensive function calls and returning the cached result when the same
        inputs occur again.
        <figure>
          <figcaption>
            Benefits of Memoization in TypeScript and ReactJS
          </figcaption>
          <ul>
            <li>
              Improved performance: Memoization can significantly improve the
              performance of your application by reducing the number of
              expensive function calls.
            </li>
            <li>
              Reduced re-renders: Memoization can also reduce the number of
              re-renders in your ReactJS components by preventing unnecessary
              renders when the input data hasn't changed.
            </li>
            <li>
              Cleaner code: Memoization can also result in cleaner code and more
              modular code. By separating the computation logic from the
              rendering logic, you can create more modular and reusable code.
            </li>
            <li>
              Scalability: As your application grows and becomes more complex,
              memoization can help you maintain performance and scalability by
              preventing unnecessary recomputations.
            </li>
            <li>
              Easier Debugging: Memoization can make debugging easier by
              providing a cache of function results, making it easier to
              identify potential issues with your code.
            </li>
          </ul>
        </figure>
      </h3>
    </div>
  );
};

export default Memoize;
