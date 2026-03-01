'use client';

import { useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Animated Number Component
export const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);
  
  // Extract numbers and non-numbers so we can animate just the numeric part
  const numericMatch = value.match(/[\d,.]+/);
  const numericPart = numericMatch ? numericMatch[0] : '';
  const prefix = value.substring(0, value.indexOf(numericPart));
  const suffix = value.substring(value.indexOf(numericPart) + numericPart.length);
  
  const targetNumber = parseFloat(numericPart.replace(/,/g, ''));
  const isFloat = numericPart.includes('.');

  useEffect(() => {
    if (!isInView || isNaN(targetNumber)) {
      if (isNaN(targetNumber)) setDisplayValue(value as any);
      return;
    }

    let startTimestamp: number;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth slowdown at the end
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentVal = targetNumber * easeOutQuart;

      setDisplayValue(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(targetNumber);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, targetNumber, value]);

  if (isNaN(targetNumber)) return <span>{value}</span>;

  // Format back with commas if necessary
  const formattedNumber = isFloat 
    ? displayValue.toFixed(1)
    : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{formattedNumber}{suffix}
    </span>
  );
};
