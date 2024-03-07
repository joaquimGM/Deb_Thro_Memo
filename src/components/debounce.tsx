import { SetStateAction, useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

function Debounce() {
  const [message, setMessage] = useState("");
  const [debouncedMessageValue, setDebouncedMessageValue] = useState("");
  const messageFunction = () => message;
  const debouncedMessage = useDebounce(messageFunction, 500);

  useEffect(() => {
    debouncedMessage(message);
    const id = setTimeout(() => {
      setDebouncedMessageValue(message);
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [message, debouncedMessage]);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className=" card">
        <h1>Debounce</h1>
        <input
          id="input"
          placeholder="Insert text"
          onChange={handleChange}
          value={message}
        ></input>
        <h2>Default: {message}</h2>
        <h2>Debounce: {debouncedMessageValue}</h2>
        <h3>
          Debounce is a valuable technique for optimizing event handling. By
          delaying the execution of a function until after a specified period of
          inactivity, debounce reduces unnecessary function calls, improves
          performance, and enhances user experience.
          <figure>
            <figcaption>Use Cases:</figcaption>
            <ul>
              <li>Reduce network calls when searching.</li>
              <li>Listening to window or element rezising elements.</li>
              <li>Listening to scroll events.</li>
            </ul>
          </figure>
        </h3>
      </div>
    </>
  );
}

export default Debounce;