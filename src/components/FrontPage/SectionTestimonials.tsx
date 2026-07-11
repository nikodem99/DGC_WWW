'use client';

import { FrontPageSection, Testimonial } from '@/types';
import { demoTestimonials } from '@/config/site';
import { hexToRgba } from './SectionTitle';
import Slider from '@/components/UI/Slider';

interface SectionTestimonialsProps {
  section: FrontPageSection;
  testimonials?: Testimonial[];
}

export function SectionTestimonials({
  section,
  testimonials = demoTestimonials,
}: SectionTestimonialsProps) {
  const outerClasses = [
    'front_page_section',
    'front_page_section_testimonials',
    section.scheme ? `scheme_${section.scheme}` : '',
    section.paddings ? `front_page_section_paddings_${section.paddings}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  const outerStyle: React.CSSProperties = {};
  if (section.bgImage) {
    outerStyle.backgroundImage = `url(${section.bgImage})`;
  }

  const innerStyle: React.CSSProperties = {};
  if (section.bgColor && section.bgMask != null && section.bgMask > 0) {
    innerStyle.backgroundColor =
      section.bgMask < 1
        ? hexToRgba(section.bgColor, section.bgMask)
        : section.bgColor;
  }

  return (
    <div className={outerClasses} style={outerStyle}>
      <div
        className="front_page_section_inner front_page_section_testimonials_inner"
        style={innerStyle}
      >
        <div className="front_page_section_content_wrap front_page_section_testimonials_content_wrap content_wrap">
          {section.caption && (
            <h2 className="front_page_section_caption front_page_section_testimonials_caption">
              {section.caption}
            </h2>
          )}
          {section.description && (
            <div className="front_page_section_description front_page_section_testimonials_description">
              {section.description}
            </div>
          )}
          <div className="sc_testimonials">
            <Slider
              slidesPerView={1}
              autoplay={true}
              autoplayDelay={6000}
              loop={true}
              showDots={true}
              showArrows={true}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.author} className="sc_testimonials_item">
                  <div className="sc_testimonials_item_content">
                    {testimonial.content}
                  </div>
                  <div className="sc_testimonials_item_author">
                    {testimonial.avatar && (
                      <div className="sc_testimonials_item_author_avatar">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
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
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
