import Image from 'next/image';
import { Testimonial } from '@/types';

interface TestimonialGradientProps {
  testimonial: Testimonial;
}

export default function TestimonialGradient({ testimonial }: TestimonialGradientProps) {
  return (
    <div className="sc_testimonials_item sc_testimonials_item_gradient">
      <div className="sc_testimonials_item_content">
        {testimonial.content}
      </div>
      {testimonial.avatar && (
        <div className="sc_testimonials_item_author_avatar">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            width={48}
            height={48}
            className="sc_testimonials_item_author_avatar_img"
          />
        </div>
      )}
      <div className="sc_testimonials_item_author">
        <h6 className="sc_testimonials_item_author_title">
          {testimonial.author}
        </h6>
        {testimonial.position && (
          <div className="sc_testimonials_item_author_subtitle">
            {testimonial.position}
          </div>
        )}
      </div>
    </div>
  );
}
