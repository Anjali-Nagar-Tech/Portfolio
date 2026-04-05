import React, { useState, useEffect } from 'react';

const TextChange = () => {

  const text = ["Hello, I am Anjali", "Frontend Developer", "React Enthusiast"];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      setCurrentText(text[index].substring(0, endValue));

      if (endValue > text[index].length + 5) {
        setIsForward(false);
      }

      if (endValue < 0) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % text.length);
      }

    }, 100);

    return () => clearInterval(intervalId);

  }, [endValue, isForward, index]);

  return (
    <h1 className='transition ease duration-300'>
      {currentText}
      <span className="blink">|</span>
    </h1>
  );
};

export default TextChange;