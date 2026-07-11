import { Testimonial } from '@/types';

interface TestimonialBigProps {
  testimonial: Testimonial;
}

export default function TestimonialBig({ testimonial }: TestimonialBigProps) {
  return (
    <div className="sc_testimonials_item sc_testimonials_item_big">
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
