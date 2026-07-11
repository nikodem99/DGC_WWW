import Link from 'next/link';
import { siteConfig } from '@/config/site';

interface HeaderLogoProps {
  type?: 'default' | 'mobile' | 'footer';
}

export default function HeaderLogo({ type = 'default' }: HeaderLogoProps) {
  const { logo, name, slogan } = siteConfig;

  let logoSrc: string;
  let retinaSrc: string | undefined;

  switch (type) {
    case 'mobile':
      logoSrc = logo.mobile || logo.default;
      retinaSrc = logo.mobileRetina || logo.retina;
      break;
    case 'footer':
      logoSrc = logo.footer || logo.default;
      retinaSrc = logo.footerRetina || logo.retina;
      break;
    default:
      logoSrc = logo.default;
      retinaSrc = logo.retina;
      break;
  }

  return (
    <div className="sc_layouts_logo">
      <Link href="/">
        {logoSrc ? (
          <img
            src={logoSrc}
            srcSet={retinaSrc ? `${logoSrc} 1x, ${retinaSrc} 2x` : undefined}
            alt={name}
            className="logo_image"
          />
        ) : (
          <>
            <span className="logo_text">{name}</span>
            {slogan && <span className="logo_slogan">{slogan}</span>}
          </>
        )}
      </Link>
    </div>
  );
}
