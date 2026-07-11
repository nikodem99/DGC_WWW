import { Testimonial } from '@/types';

interface TestimonialSimpleProps {
  testimonial: Testimonial;
}

export default function TestimonialSimple({ testimonial }: TestimonialSimpleProps) {
  return (
    <div className="sc_testimonials_item sc_testimonials_item_simple">
      <div className="sc_testimonials_item_content">
        <span className="sc_testimonials_item_quote_mark">&ldquo;</span>
        {testimonial.content}
      </div>
      <div className="sc_testimonials_item_author">
        <h6 className="sc_testimonials_item_author_title">
          {testimonial.author}
        </h6>
      </div>
    </div>
  );
}
