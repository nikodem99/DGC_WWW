'use client';

import { useState, useRef, useEffect, ReactNode, useCallback } from 'react';

interface SliderProps {
  children: ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export default function Slider({
  children,
  slidesPerView = 1,
  spaceBetween = 30,
  autoplay = false,
  autoplayDelay = 5000,
  loop = true,
  showDots = true,
  showArrows = true,
  className = '',
}: SliderProps) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const totalSlides = children.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  const goTo = useCallback((index: number) => {
    if (loop) {
      setCurrent(((index % totalSlides) + totalSlides) % totalSlides);
    } else {
      setCurrent(Math.max(0, Math.min(index, maxIndex)));
    }
  }, [loop, totalSlides, maxIndex]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(next, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, next]);

  const slideWidth = `calc((100% - ${spaceBetween * (slidesPerView - 1)}px) / ${slidesPerView})`;
  const translateX = `calc(-${current} * (${slideWidth} + ${spaceBetween}px))`;

  return (
    <div className={`sc_slider ${className}`}>
      <div className="sc_slider_viewport" style={{ overflow: 'hidden' }}>
        <div
          ref={trackRef}
          className="sc_slider_track"
          style={{
            display: 'flex',
            gap: `${spaceBetween}px`,
            transform: `translateX(${translateX})`,
            transition: 'transform 0.5s ease',
          }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="sc_slider_slide"
              style={{ flex: `0 0 ${slideWidth}`, minWidth: 0 }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {showArrows && totalSlides > slidesPerView && (
        <>
          <button
            className="sc_slider_arrow sc_slider_arrow_prev"
            onClick={prev}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button
            className="sc_slider_arrow sc_slider_arrow_next"
            onClick={next}
            aria-label="Next slide"
          >
            &#8250;
          </button>
        </>
      )}
      {showDots && totalSlides > slidesPerView && (
        <div className="sc_slider_dots">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              className={`sc_slider_dot ${i === current ? 'sc_slider_dot_active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
