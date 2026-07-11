import { FrontPageSection } from '@/types';
import { hexToRgba } from './SectionTitle';
import AnimateOnScroll from '@/components/UI/AnimateOnScroll';

interface SectionAboutProps {
  section: FrontPageSection;
}

export function SectionAbout({ section }: SectionAboutProps) {
  const outerClasses = [
    'front_page_section',
    'front_page_section_about',
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
        className="front_page_section_inner front_page_section_about_inner"
        style={innerStyle}
      >
        <div className="front_page_section_content_wrap front_page_section_about_content_wrap content_wrap">
          <AnimateOnScroll animation="fadeInUp">
            {section.caption && (
              <h2 className="front_page_section_caption front_page_section_about_caption">
                {section.caption}
              </h2>
            )}
            {section.description && (
              <div className="front_page_section_description front_page_section_about_description">
                {section.description}
              </div>
            )}
            {section.content && (
              <div
                className="front_page_section_content front_page_section_about_content"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
