import { act } from "@testing-library/react";
import useThrottle from "../hooks/useThrottle";

test("should throttle the callback based on the provided limit", () => {
  const callback = jest.fn();
  const throttledCallback = useThrottle(callback, 1000);

  act(() => {
    throttledCallback();
  });

  setTimeout(() => {
    expect(callback).toHaveBeenCalled();
  }, 1100);
});
