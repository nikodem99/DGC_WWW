import Image from 'next/image';
import { SocialLink } from '@/types';

interface WidgetAboutProps {
  avatar?: string;
  name: string;
  description: string;
  socials?: SocialLink[];
}

export default function WidgetAbout({ avatar, name, description, socials }: WidgetAboutProps) {
  return (
    <aside className="widget widget_about">
      <h5 className="widget_title">{name}</h5>
      {avatar && (
        <div className="widget_about_avatar">
          <Image
            src={avatar}
            alt={name}
            width={120}
            height={120}
            className="widget_about_avatar_img"
          />
        </div>
      )}
      <div className="widget_about_description">
        <p>{description}</p>
      </div>
      {socials && socials.length > 0 && (
        <div className="widget_about_socials">
          {socials.map((social) => (
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
    </aside>
  );
}
