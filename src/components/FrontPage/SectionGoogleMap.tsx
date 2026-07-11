'use client';

import { FrontPageSection } from '@/types';
import { hexToRgba } from './SectionTitle';

interface SectionGoogleMapProps {
  section: FrontPageSection;
}

export function SectionGoogleMap({ section }: SectionGoogleMapProps) {
  const outerClasses = [
    'front_page_section',
    'front_page_section_googlemap',
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
        className="front_page_section_inner front_page_section_googlemap_inner"
        style={innerStyle}
      >
        <div className="front_page_section_content_wrap front_page_section_googlemap_content_wrap content_wrap">
          {section.caption && (
            <h2 className="front_page_section_caption front_page_section_googlemap_caption">
              {section.caption}
            </h2>
          )}
          {section.description && (
            <div className="front_page_section_description front_page_section_googlemap_description">
              {section.description}
            </div>
          )}
        </div>

        <div className="sc_googlemap_wrap">
          <div className="sc_googlemap" data-zoom="14">
            <div className="sc_googlemap_content">
              {/* Placeholder map - replace with actual Google Maps embed or API integration */}
              <div className="sc_googlemap_placeholder">
                <div className="sc_googlemap_placeholder_inner">
                  <span className="sc_googlemap_placeholder_icon icon-location" />
                  <span className="sc_googlemap_placeholder_text">
                    Map will be displayed here
                  </span>
                </div>
              </div>
            </div>
          </div>

          {section.content && (
            <div className="sc_googlemap_overlay">
              <div className="sc_googlemap_overlay_inner content_wrap">
                <div
                  className="sc_googlemap_overlay_content"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
                {section.buttons && section.buttons.length > 0 && (
                  <div className="sc_googlemap_overlay_buttons">
                    {section.buttons.map((btn, index) => (
                      <a
                        key={index}
                        href={btn.url}
                        className={`sc_button sc_button_${btn.style || 'default'}`}
                      >
                        {btn.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
