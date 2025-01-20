import React, { useState, useEffect } from "react";
import "./AnimatedText.css";

const AnimatedText = () => {
  const text = "Welcome to my world. My name is Yu Tung.";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const [showText, setShowText] = useState(true); 

  const handleUserInteraction = () => {
    setShowText(false); 
    window.removeEventListener("mousedown", handleUserInteraction);
    window.removeEventListener("mouseup", handleUserInteraction); 
  };


  useEffect(() => {
    window.addEventListener("mousedown", handleUserInteraction);
    window.addEventListener("mouseup", handleUserInteraction); 


    return () => {
      window.removeEventListener("mousedown", handleUserInteraction);
      window.removeEventListener("mouseup", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setStartTyping(true);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (startTyping && currentIndex < text.length && showText) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, startTyping, showText]);

  return (
    <div className="container_text">
      {showText && (
        <div className="animated-text">
          {displayText}
          <span className="cursor"></span>
        </div>
      )}
    </div>
  );
};

export default AnimatedText;
