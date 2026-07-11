'use client';

import { siteConfig } from '@/config/site';

export default function StickySocials() {
  if (!siteConfig.socials || siteConfig.socials.length === 0) return null;

  return (
    <div className="sticky_socials">
      {siteConfig.socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className="sticky_social_item"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          <span className={social.icon} />
        </a>
      ))}
    </div>
  );
}
