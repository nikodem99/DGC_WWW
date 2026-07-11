import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import EventsGrid from '@/components/Events/EventsGrid';
import { siteConfig, demoEvents } from '@/config/site';

export const metadata = {
  title: 'Events',
};

export default function EventsPage() {
  return (
    <>
      <Header
        title="Events"
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events' },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <EventsGrid events={demoEvents} columns={3} />
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
