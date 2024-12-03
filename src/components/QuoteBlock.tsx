/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

const QuoteBlock = () => {
  const quotes = [
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "The journey of a thousand miles begins with one step.",
    "Life is what happens when you're busy making other plans.",
    "You miss 100% of the shots you don't take.",
    "The present moment is the only moment available to us.",
    "Wherever you are, be all there."
    // Add more quotes as desired
  ];

  const [currentQuote, setCurrentQuote] = useState('');
  const [animate, setAnimate] = useState(false as any);

  useEffect(() => {
    // Function to update the quote
    const updateQuote = () => {
      // Randomly select a new quote
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(randomQuote);
    };

    // Initial quote
    updateQuote();

    // Set interval to update the quote every 40 seconds
    const intervalId = setInterval(() => {
      // Trigger fade-out animation
      setAnimate(true);

      // Wait for the fade-out animation to complete before updating the quote
      setTimeout(() => {
        updateQuote();
        // Trigger fade-in animation
        setAnimate(false);
      }, 500); // Duration matches the CSS animation duration
    }, 40000); // 40000 milliseconds = 40 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <blockquote
      className={`text-xl italic font-semibold text-gray-900 dark:text-white transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'}`}
    >
      <p>"{currentQuote}"</p>
    </blockquote>
  );
};

export default QuoteBlock;

