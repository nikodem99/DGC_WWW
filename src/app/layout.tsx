import type { Metadata } from 'next';
import { Montserrat, DM_Sans } from 'next/font/google';
import { siteConfig } from '@/config/site';
import SkipLinks from '@/components/UI/SkipLinks';
import StickySocials from '@/components/UI/StickySocials';

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '700'],
});

import '@/styles/icons.css';
import '@/styles/globals.css';
import '@/styles/header.css';
import '@/styles/footer.css';
import '@/styles/blog.css';
import '@/styles/single.css';
import '@/styles/sidebar.css';
import '@/styles/comments.css';
import '@/styles/front-page.css';
import '@/styles/portfolio.css';
import '@/styles/services.css';
import '@/styles/shortcodes.css';
import '@/styles/shop.css';
import '@/styles/team.css';
import '@/styles/events.css';
import '@/styles/responsive.css';
import '@/styles/animations.css';
import '@/styles/slider.css';
import '@/styles/gutenberg.css';
import '@/styles/rtl.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.slogan,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`no-js scheme_${siteConfig.colorScheme} ${montserrat.variable} ${dmSans.variable}`}>
      <body className={montserrat.className}>
        <SkipLinks />
        <StickySocials />
        <div className="body_wrap">
          <div className="page_wrap">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
