import { siteConfig } from '@/config/site';

export default function FooterSocials() {
  const { socialsInFooter, socials } = siteConfig;

  if (!socialsInFooter || !socials || socials.length === 0) {
    return null;
  }

  return (
    <div className="footer_socials_wrap socials_wrap">
      <div className="footer_socials_inner">
        {socials.map((social) => (
          <div key={social.name} className="social_item">
            <a
              href={social.url}
              className="social_icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <span className={`social_icon_${social.name.toLowerCase()}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
