import React, { useState, useRef, useEffect } from 'react';
import { computePosition, flip, shift, offset } from '@floating-ui/dom';

interface FloatingTooltipProps {
  content: string;
  children: React.ReactNode;
}

const FloatingTooltip: React.FC<FloatingTooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const referenceRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && referenceRef.current && floatingRef.current) {
      computePosition(referenceRef.current, floatingRef.current, {
        placement: 'top',
        middleware: [offset(6), flip(), shift({ padding: 5 })],
      }).then(({ x, y }) => {
        Object.assign(floatingRef.current!.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
  }, [isVisible]);

  return (
    <div className="relative inline-block">
      <div
        ref={referenceRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={floatingRef}
          className="absolute z-10 bg-gray-800 text-white p-2 rounded text-sm"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default FloatingTooltip;