import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Text = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;

    const animateText = () => {
      const headingText = heading.textContent;
      const chars = headingText.split('');

      // Clear the original text content
      heading.textContent = '';

      // Wrap each character in a span
      chars.forEach((char, index) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        heading.appendChild(charSpan);
      });

      // Get the spans for animation
      const headingChars = heading.querySelectorAll('span');

      gsap.from(headingChars, {
        filter: 'blur(0.15em)',
        stagger: {
          from: 'left',
          each: 0.1,
        },
        duration: (i) => 1.25 + i * 0.75,
        ease: 'power2.inOut',
      });

      gsap.from(
        headingChars,
        {
          xPercent: (i) => (i + 1) * 40,
          opacity: 0,
          stagger: {
            from: 'left',
            each: 0.1,
          },
          duration: (i) => 1 + i * 0.1,
          ease: 'power2.out',
        },
        '<'
      );
    };

    // Initial animation
    animateText();

    // Set up interval for repeating the animation every 5 seconds
    const intervalId = setInterval(() => {
      // Reset and animate the text again
      animateText();
    }, 15000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
   <div className='text'>
   <h1 ref={headingRef} className="heading" aria-label="nebula">
    Software Developer
   </h1>
   </div>
  );
};

export default Text;
