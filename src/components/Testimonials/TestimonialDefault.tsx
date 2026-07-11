import Image from 'next/image';
import { Testimonial } from '@/types';

interface TestimonialDefaultProps {
  testimonial: Testimonial;
}

export default function TestimonialDefault({ testimonial }: TestimonialDefaultProps) {
  return (
    <div className="sc_testimonials_item sc_testimonials_item_default">
      <div className="sc_testimonials_item_content">
        {testimonial.content}
      </div>
      <div className="sc_testimonials_item_author">
        {testimonial.avatar && (
          <div className="sc_testimonials_item_author_avatar">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              width={60}
              height={60}
              className="sc_testimonials_item_author_avatar_img"
            />
          </div>
        )}
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
