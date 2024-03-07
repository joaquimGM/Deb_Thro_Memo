import { useState, useEffect } from "react";
import useThrottle from "../hooks/useThrottle";

function Throttle() {
  const [calls, setCalls] = useState(0);
  const [position, setPosition] = useState(0);
  const [tCalls, tSetCalls] = useState(0);

  function handleScroll() {
    setCalls((c) => c + 1);
    setPosition(
      Math.round(
        ((document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
          100
      )
    );
  }

  function handleScrollThrottle() {
    tSetCalls((c) => c + 1);
  }

  const throttledScroll = useThrottle(handleScrollThrottle, 1000);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return (
    <>
      <div className="card">
        <h1>Throttle</h1>
        <h2>Default Calls: {calls}</h2>
        <h2>Throttle Calls: {tCalls}</h2>
        <h2>Position: {position} </h2>
        <h3>
          The throttle function returns a new function that wraps the callback
          with a logic that uses setTimeout to create a timer. The timer ensures
          that the callback is only called once within the delay period. If the
          returned function is called again before the timer expires, it does
          nothing.{" "}
        </h3>
      </div>
    </>
  );
}

export default Throttle;