import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function FooterLogo() {
  const { logoInFooter, logo, name } = siteConfig;

  if (!logoInFooter) {
    return null;
  }

  const logoSrc = logo.footer || logo.default;
  const retinaSrc = logo.footerRetina || logo.retina;

  return (
    <div className="footer_logo_wrap">
      <div className="footer_logo_inner">
        {logoSrc ? (
          <Link href="/">
            <img
              src={logoSrc}
              srcSet={retinaSrc ? `${logoSrc} 1x, ${retinaSrc} 2x` : undefined}
              alt={name}
              className="logo_footer_image"
            />
          </Link>
        ) : (
          <h1 className="logo_footer_text">
            <Link href="/">{name}</Link>
          </h1>
        )}
      </div>
    </div>
  );
}
