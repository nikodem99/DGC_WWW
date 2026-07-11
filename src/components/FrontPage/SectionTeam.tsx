import { FrontPageSection, TeamMember } from '@/types';
import { demoTeam } from '@/config/site';
import { hexToRgba } from './SectionTitle';
import AnimateOnScroll from '@/components/UI/AnimateOnScroll';

interface SectionTeamProps {
  section: FrontPageSection;
  members?: TeamMember[];
}

export function SectionTeam({
  section,
  members = demoTeam,
}: SectionTeamProps) {
  const outerClasses = [
    'front_page_section',
    'front_page_section_team',
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
        className="front_page_section_inner front_page_section_team_inner"
        style={innerStyle}
      >
        <div className="front_page_section_content_wrap front_page_section_team_content_wrap content_wrap">
          {section.caption && (
            <h2 className="front_page_section_caption front_page_section_team_caption">
              {section.caption}
            </h2>
          )}
          {section.description && (
            <div className="front_page_section_description front_page_section_team_description">
              {section.description}
            </div>
          )}
          <div className="sc_team columns_wrap">
            {members.map((member, index) => (
              <AnimateOnScroll key={member.name} animation="fadeInUp" delay={index * 150}>
                <div className="sc_team_item column-1_4">
                  <div className="sc_team_item_avatar">
                    <img src={member.avatar} alt={member.name} />
                  </div>
                  <div className="sc_team_item_info">
                    <h6 className="sc_team_item_title">{member.name}</h6>
                    <div className="sc_team_item_subtitle">
                      {member.position}
                    </div>
                    {member.socials && member.socials.length > 0 && (
                      <div className="sc_team_item_socials">
                        {member.socials.map((social) => (
                          <a
                            key={social.name}
                            href={social.url}
                            className="social_item"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.name}
                          >
                            <span className={`social_icon ${social.icon}`} />
                          </a>
                        ))}
                      </div>
                    )}
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
