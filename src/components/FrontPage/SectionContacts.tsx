'use client';

import { FrontPageSection, ContactInfo } from '@/types';
import { demoContacts } from '@/config/site';
import { hexToRgba } from './SectionTitle';

interface SectionContactsProps {
  section: FrontPageSection;
  contacts?: ContactInfo[];
}

export function SectionContacts({
  section,
  contacts = demoContacts,
}: SectionContactsProps) {
  const outerClasses = [
    'front_page_section',
    'front_page_section_contacts',
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
        className="front_page_section_inner front_page_section_contacts_inner"
        style={innerStyle}
      >
        <div className="front_page_section_content_wrap front_page_section_contacts_content_wrap content_wrap">
          {section.caption && (
            <h2 className="front_page_section_caption front_page_section_contacts_caption">
              {section.caption}
            </h2>
          )}
          {section.description && (
            <div className="front_page_section_description front_page_section_contacts_description">
              {section.description}
            </div>
          )}
          <div className="sc_contact_info">
            {contacts.map((contact) => (
              <div key={contact.label} className="sc_contact_info_item">
                <span className={`sc_contact_info_icon ${contact.icon}`} />
                <span className="sc_contact_info_label">{contact.label}</span>
                {contact.url ? (
                  <a href={contact.url} className="sc_contact_info_value">
                    {contact.value}
                  </a>
                ) : (
                  <span className="sc_contact_info_value">
                    {contact.value}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="sc_contact_form">
            <form>
              <div className="sc_contact_form_field">
                <input type="text" name="name" placeholder="Your name" />
              </div>
              <div className="sc_contact_form_field">
                <input type="email" name="email" placeholder="Your email" />
              </div>
              <div className="sc_contact_form_field">
                <textarea name="message" placeholder="Your message" />
              </div>
              <div className="sc_contact_form_field sc_contact_form_field_submit">
                <button type="submit" className="sc_button sc_button_default">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
