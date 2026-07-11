'use client';

import { FrontPageSection } from '@/types';
import { hexToRgba } from './SectionTitle';

interface SectionSubscribeProps {
  section: FrontPageSection;
}

export function SectionSubscribe({ section }: SectionSubscribeProps) {
  const outerClasses = [
    'front_page_section',
    'front_page_section_subscribe',
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
        className="front_page_section_inner front_page_section_subscribe_inner"
        style={innerStyle}
      >
        <div className="front_page_section_content_wrap front_page_section_subscribe_content_wrap content_wrap">
          {section.caption && (
            <h2 className="front_page_section_caption front_page_section_subscribe_caption">
              {section.caption}
            </h2>
          )}
          {section.description && (
            <div className="front_page_section_description front_page_section_subscribe_description">
              {section.description}
            </div>
          )}
          <form className="sc_form_subscribe">
            <input type="email" placeholder="Your email" />
            <button type="submit" className="sc_button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
