import { SocialLink } from '@/types';

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export default function SocialLinks({ links, className }: SocialLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className={`socials_wrap${className ? ` ${className}` : ''}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className="social_item"
          target="_blank"
          rel="noopener noreferrer"
          title={link.name}
        >
          <span className={`social_icon ${link.icon}`} />
        </a>
      ))}
    </div>
  );
}
