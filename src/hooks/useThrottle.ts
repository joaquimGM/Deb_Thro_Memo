let timeoutRef: number | null = null;

function useThrottle(cb: () => void, limit: number): () => void {
  return function () {
    if (!timeoutRef) {
      cb();
      timeoutRef = window.setTimeout(() => {
        timeoutRef = null;
      }, limit);
    }
  };
}

export default useThrottle;