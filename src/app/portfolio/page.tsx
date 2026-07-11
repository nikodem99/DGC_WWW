import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PortfolioGrid from '@/components/Portfolio/PortfolioGrid';
import Sidebar from '@/components/Sidebar/Sidebar';
import { siteConfig, demoPortfolio } from '@/config/site';

export const metadata = {
  title: 'Portfolio',
};

export default function PortfolioPage() {
  return (
    <>
      <Header
        title="Portfolio"
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio' },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <PortfolioGrid
              items={demoPortfolio}
              layout="default"
              columns={3}
            />
          </div>
          {siteConfig.showSidebar && (
            <Sidebar position={siteConfig.sidebarPosition as 'left' | 'right'} />
          )}
        </div>
      </div>
      <span id="footer_skip_link_anchor" className="gross_skip_link_anchor" />
      <Footer />
    </>
  );
}
