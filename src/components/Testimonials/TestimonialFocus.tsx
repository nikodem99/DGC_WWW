import Image from 'next/image';
import { Testimonial } from '@/types';

interface TestimonialFocusProps {
  testimonial: Testimonial;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="sc_testimonials_item_rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`sc_testimonials_item_rating_star ${
            star <= rating
              ? 'sc_testimonials_item_rating_star_filled'
              : 'sc_testimonials_item_rating_star_empty'
          }`}
        >
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

export default function TestimonialFocus({ testimonial }: TestimonialFocusProps) {
  return (
    <div className="sc_testimonials_item sc_testimonials_item_focus">
      {testimonial.avatar && (
        <div className="sc_testimonials_item_author_avatar">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            width={90}
            height={90}
            className="sc_testimonials_item_author_avatar_img"
          />
        </div>
      )}
      <div className="sc_testimonials_item_content_wrap">
        <div className="sc_testimonials_item_content">
          {testimonial.content}
        </div>
        {testimonial.rating != null && (
          <StarRating rating={testimonial.rating} />
        )}
        <div className="sc_testimonials_item_author">
          <h6 className="sc_testimonials_item_author_title">
            {testimonial.author}
          </h6>
          {testimonial.position && (
            <div className="sc_testimonials_item_author_subtitle">
              <em>{testimonial.position}</em>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
