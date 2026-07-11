import Link from 'next/link';
import { FrontPageSection } from '@/types';

export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface SectionTitleProps {
  section: FrontPageSection;
}

export function SectionTitle({ section }: SectionTitleProps) {
  const outerClasses = [
    'front_page_section',
    'front_page_section_title',
    section.scheme ? `scheme_${section.scheme}` : '',
    section.paddings ? `front_page_section_paddings_${section.paddings}` : '',
    section.fullheight ? 'front_page_section_fullheight' : '',
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

  const innerClasses = [
    'front_page_section_inner',
    'front_page_section_title_inner',
    section.fullheight
      ? 'gross-full-height sc_layouts_flex sc_layouts_columns_middle'
      : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={outerClasses} style={outerStyle}>
      <div className={innerClasses} style={innerStyle}>
        <div className="front_page_section_content_wrap front_page_section_title_content_wrap content_wrap">
          {section.caption && (
            <h1 className="front_page_section_caption front_page_section_title_caption">
              {section.caption}
            </h1>
          )}
          {section.description && (
            <div className="front_page_section_description front_page_section_title_description">
              {section.description}
            </div>
          )}
          {section.buttons && section.buttons.length > 0 && (
            <div className="front_page_section_buttons front_page_section_title_buttons">
              {section.buttons.map((button) => (
                <Link
                  key={button.label}
                  href={button.url}
                  className={`sc_button sc_button_default${button.style ? ` sc_button_style_${button.style}` : ''}`}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
