import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BlogArchive from '@/components/Blog/BlogArchive';
import Sidebar from '@/components/Sidebar/Sidebar';
import { siteConfig, demoPosts } from '@/config/site';

export const metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  return (
    <>
      <Header
        title="Blog"
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <BlogArchive
              posts={demoPosts}
              blogStyle={siteConfig.blogStyle}
              currentPage={1}
              totalPages={3}
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
