import { FrontPageSection, Feature } from '@/types';
import { demoFeatures } from '@/config/site';
import { hexToRgba } from './SectionTitle';
import AnimateOnScroll from '@/components/UI/AnimateOnScroll';

interface SectionFeaturesProps {
  section: FrontPageSection;
  features?: Feature[];
}

export function SectionFeatures({
  section,
  features = demoFeatures,
}: SectionFeaturesProps) {
  const outerClasses = [
    'front_page_section',
    'front_page_section_features',
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
        className="front_page_section_inner front_page_section_features_inner"
        style={innerStyle}
      >
        <div className="front_page_section_content_wrap front_page_section_features_content_wrap content_wrap">
          {section.caption && (
            <h2 className="front_page_section_caption front_page_section_features_caption">
              {section.caption}
            </h2>
          )}
          {section.description && (
            <div className="front_page_section_description front_page_section_features_description">
              {section.description}
            </div>
          )}
          <div className="sc_services columns_wrap">
            {features.map((feature, index) => (
              <AnimateOnScroll key={feature.title} animation="fadeInUp" delay={index * 150}>
                <div className="sc_services_item column-1_3">
                  <div className="sc_services_item_icon">
                    <span className={feature.icon} />
                  </div>
                  <h4 className="sc_services_item_title">{feature.title}</h4>
                  <div className="sc_services_item_description">
                    {feature.description}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
