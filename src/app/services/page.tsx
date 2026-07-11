import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import ServicesGrid from '@/components/Services/ServicesGrid';
import { siteConfig, demoServices } from '@/config/site';

export const metadata = {
  title: 'Services',
};

export default function ServicesPage() {
  return (
    <>
      <Header
        title="Services"
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <ServicesGrid
              services={demoServices}
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
