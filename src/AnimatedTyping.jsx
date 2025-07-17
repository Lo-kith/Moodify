// AnimatedTyping.jsx
import React, { useState, useEffect } from 'react';
import './About.css';

const AnimatedTyping = ({ text, speed = 100 }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className="typing-animation">
      {displayed}<span className="cursor">|</span>
    </h1>
  );
};

export default AnimatedTyping;
