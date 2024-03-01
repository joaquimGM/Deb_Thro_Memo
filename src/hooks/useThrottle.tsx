import { useRef } from 'react';

function useThrottle(cb: () => void, limit: number) {
  const timeoutRef = useRef<number | null>(null);

  return function () {
    if (!timeoutRef.current) {
      cb();
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
      }, limit);
    }
  };
}

export default useThrottle;