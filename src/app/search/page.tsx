import { Suspense } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import SearchContent from '@/components/Search/SearchContent';
import { siteConfig } from '@/config/site';

export default function SearchPage() {
  return (
    <>
      <Header
        title="Search Results"
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Search' },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <Suspense fallback={<div className="search_loading">Loading...</div>}>
              <SearchContent />
            </Suspense>
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
