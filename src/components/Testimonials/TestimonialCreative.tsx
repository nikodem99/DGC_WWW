import Image from 'next/image';
import { Testimonial } from '@/types';

interface TestimonialCreativeProps {
  testimonial: Testimonial;
}

export default function TestimonialCreative({ testimonial }: TestimonialCreativeProps) {
  return (
    <div className="sc_testimonials_item sc_testimonials_item_creative">
      <div className="sc_testimonials_item_quote">
        <span className="sc_testimonials_item_quote_icon icon-quote" />
      </div>
      <div className="sc_testimonials_item_content">
        {testimonial.content}
      </div>
      <div className="sc_testimonials_item_author">
        {testimonial.avatar && (
          <div className="sc_testimonials_item_author_avatar">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              width={50}
              height={50}
              className="sc_testimonials_item_author_avatar_img"
            />
          </div>
        )}
        <div className="sc_testimonials_item_author_info">
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
    </div>
  );
}
