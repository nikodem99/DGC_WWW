import { SocialLink } from '@/types';

interface WidgetSocialsProps {
  socials: SocialLink[];
  layout?: string;
}

export default function WidgetSocials({ socials, layout = 'default' }: WidgetSocialsProps) {
  return (
    <aside className={`widget widget_socials widget_socials_${layout}`}>
      <h5 className="widget_title">Follow Us</h5>
      <div className="widget_socials_inner">
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
            <span className="social_name">{social.name}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
