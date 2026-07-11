import Image from 'next/image';
import { Testimonial } from '@/types';

interface TestimonialPanelProps {
  testimonial: Testimonial;
}

export default function TestimonialPanel({ testimonial }: TestimonialPanelProps) {
  return (
    <div className="sc_testimonials_item sc_testimonials_item_panel">
      <div className="sc_testimonials_item_accent" />
      {testimonial.avatar && (
        <div className="sc_testimonials_item_author_avatar">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            width={70}
            height={70}
            className="sc_testimonials_item_author_avatar_img"
          />
        </div>
      )}
      <div className="sc_testimonials_item_content">
        {testimonial.content}
      </div>
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
