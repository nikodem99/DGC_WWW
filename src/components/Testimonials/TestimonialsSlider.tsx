'use client';

import { useState, useEffect, useCallback } from 'react';
import { Testimonial } from '@/types';
import TestimonialDefault from './TestimonialDefault';
import TestimonialClassic from './TestimonialClassic';
import TestimonialModern from './TestimonialModern';
import TestimonialLight from './TestimonialLight';
import TestimonialSimple from './TestimonialSimple';
import TestimonialCreative from './TestimonialCreative';
import TestimonialPanel from './TestimonialPanel';
import TestimonialBubble from './TestimonialBubble';
import TestimonialExtra from './TestimonialExtra';
import TestimonialFocus from './TestimonialFocus';
import TestimonialGradient from './TestimonialGradient';
import TestimonialBig from './TestimonialBig';

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
  layout?: string;
  autoplay?: boolean;
}

export default function TestimonialsSlider({
  testimonials,
  layout = 'default',
  autoplay = false,
}: TestimonialsSliderProps) {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (!autoplay || total <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay, total]);

  const renderTestimonial = (testimonial: Testimonial) => {
    switch (layout) {
      case 'classic':
        return <TestimonialClassic testimonial={testimonial} />;
      case 'modern':
        return <TestimonialModern testimonial={testimonial} />;
      case 'light':
        return <TestimonialLight testimonial={testimonial} />;
      case 'simple':
        return <TestimonialSimple testimonial={testimonial} />;
      case 'creative':
        return <TestimonialCreative testimonial={testimonial} />;
      case 'panel':
        return <TestimonialPanel testimonial={testimonial} />;
      case 'bubble':
        return <TestimonialBubble testimonial={testimonial} />;
      case 'extra':
        return <TestimonialExtra testimonial={testimonial} />;
      case 'focus':
        return <TestimonialFocus testimonial={testimonial} />;
      case 'gradient':
        return <TestimonialGradient testimonial={testimonial} />;
      case 'big':
        return <TestimonialBig testimonial={testimonial} />;
      case 'default':
      default:
        return <TestimonialDefault testimonial={testimonial} />;
    }
  };

  if (total === 0) return null;

  return (
    <div className="sc_testimonials slider_container">
      <div className="slider_wrap">
        <div
          className="slider_track"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: 'transform 0.4s ease-in-out',
            display: 'flex',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="slider_slide"
              style={{ minWidth: '100%', flexShrink: 0 }}
              aria-hidden={index !== current}
            >
              {renderTestimonial(testimonial)}
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <>
          <div className="slider_controls">
            <button
              type="button"
              className="slider_prev"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <span className="slider_prev_icon icon-left-open" />
            </button>
            <button
              type="button"
              className="slider_next"
              onClick={next}
              aria-label="Next testimonial"
            >
              <span className="slider_next_icon icon-right-open" />
            </button>
          </div>

          <div className="slider_dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`slider_dot${index === current ? ' slider_dot_active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
