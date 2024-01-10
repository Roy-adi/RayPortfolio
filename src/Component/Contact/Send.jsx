import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import './Send.css'
const Send = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);

      const button = buttonRef.current;

      gsap.to(button, {
        keyframes: [
          {
            '--left-wing-first-x': 50,
            '--left-wing-first-y': 100,
            '--right-wing-second-x': 50,
            '--right-wing-second-y': 100,
            duration: 0.2,
            onComplete() {
              gsap.set(button, {
                '--left-wing-first-y': 0,
                '--left-wing-second-x': 40,
                '--left-wing-second-y': 100,
                '--left-wing-third-x': 0,
                '--left-wing-third-y': 100,
                '--left-body-third-x': 40,
                '--right-wing-first-x': 50,
                '--right-wing-first-y': 0,
                '--right-wing-second-x': 60,
                '--right-wing-second-y': 100,
                '--right-wing-third-x': 100,
                '--right-wing-third-y': 100,
                '--right-body-third-x': 60,
              });
            },
          },
          {
            '--left-wing-third-x': 20,
            '--left-wing-third-y': 90,
            '--left-wing-second-y': 90,
            '--left-body-third-y': 90,
            '--right-wing-third-x': 80,
            '--right-wing-third-y': 90,
            '--right-body-third-y': 90,
            '--right-wing-second-y': 90,
            duration: 0.2,
          },
          {
            '--rotate': 50,
            '--left-wing-third-y': 95,
            '--left-wing-third-x': 27,
            '--right-body-third-x': 45,
            '--right-wing-second-x': 45,
            '--right-wing-third-x': 60,
            '--right-wing-third-y': 83,
            duration: 0.25,
          },
          {
            '--rotate': 55,
            '--plane-x': -8,
            '--plane-y': 24,
            duration: 0.2,
          },
          {
            '--rotate': 40,
            '--plane-x': 45,
            '--plane-y': -180,
            '--plane-opacity': 0,
            duration: 0.3,
            onComplete() {
              setTimeout(() => {
                button.removeAttribute('style');
                gsap.fromTo(
                  button,
                  {
                    opacity: 0,
                    y: -8,
                  },
                  {
                    opacity: 1,
                    y: 0,
                    clearProps: 'all',
                    duration: 0.3,
                    onComplete() {
                      setIsAnimating(false);
                    },
                  }
                );
              }, 2000);
            },
          },
        ],
      });

      gsap.to(button, {
        keyframes: [
          {
            '--text-opacity': 0,
            '--border-radius': 0,
            '--left-wing-background': getComputedStyle(button).getPropertyValue('--primary-darkest'),
            '--right-wing-background': getComputedStyle(button).getPropertyValue('--primary-darkest'),
            duration: 0.1,
          },
          {
            '--left-wing-background': getComputedStyle(button).getPropertyValue('--primary'),
            '--right-wing-background': getComputedStyle(button).getPropertyValue('--primary'),
            duration: 0.1,
          },
          {
            '--left-body-background': getComputedStyle(button).getPropertyValue('--primary-dark'),
            '--right-body-background': getComputedStyle(button).getPropertyValue('--primary-darkest'),
            duration: 0.4,
          },
          {
            '--success-opacity': 1,
            '--success-scale': 1,
            duration: 0.25,
            delay: 0.25,
          },
        ],
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`button ${isAnimating ? 'active' : ''}`}
      onClick={handleButtonClick}
    >
      <span className="default">Send</span>
      <span className="success">Sent</span>
      <div className="left"></div>
      <div className="right"></div>
    </button>
  );
};

export default Send;
