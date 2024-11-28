import React, { useEffect } from "react";
import "./bubble.css";

const BubblesBackground = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      const size = Math.random() * 60 + 40; 
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 5 + 3}s`; 
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      document.body.appendChild(bubble);

    
      bubble.addEventListener("animationend", () => {
        bubble.remove();
      });
    };

    const interval = setInterval(createBubble, 3000);

    return () => clearInterval(interval); 
  }, []);

  return null; 
};

export default BubblesBackground;
