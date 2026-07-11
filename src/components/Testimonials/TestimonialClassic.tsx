import Image from 'next/image';
import { Testimonial } from '@/types';

interface TestimonialClassicProps {
  testimonial: Testimonial;
}

export default function TestimonialClassic({ testimonial }: TestimonialClassicProps) {
  return (
    <div className="sc_testimonials_item sc_testimonials_item_classic">
      <div className="sc_testimonials_item_inner">
        {testimonial.avatar && (
          <div className="sc_testimonials_item_author_avatar">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              width={80}
              height={80}
              className="sc_testimonials_item_author_avatar_img"
            />
          </div>
        )}
        <div className="sc_testimonials_item_content_wrap">
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
      </div>
    </div>
  );
}
