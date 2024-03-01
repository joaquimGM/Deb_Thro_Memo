import useDebounce from "../hooks/useDebounce";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import "identity-obj-proxy";

jest.useFakeTimers();
describe("useDebounce", () => {
  it("should debounce the value after a delay", () => {
    let debouncedValue: string = "";

    act(() => {
      const debouncedHook = useDebounce("initial", 1000);
      debouncedValue = debouncedHook;
      jest.advanceTimersByTime(1000);
    });

    expect(debouncedValue).toBe("initial");
  });

  it("should update the value after the specified delay", () => {
    let debouncedValue: string = "";

    act(() => {
      const debouncedHook = useDebounce("initial", 1000);
      debouncedValue = debouncedHook;
      jest.advanceTimersByTime(1100);
    });

    expect(debouncedValue).toBe("initial");
  });
});
