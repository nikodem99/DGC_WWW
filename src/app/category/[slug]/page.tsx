import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BlogArchive from '@/components/Blog/BlogArchive';
import Sidebar from '@/components/Sidebar/Sidebar';
import { siteConfig, demoPosts, demoCategories } from '@/config/site';

export function generateStaticParams() {
  return demoCategories.map((cat) => ({
    slug: cat.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const category = demoCategories.find((c) => c.slug === slug);
    return {
      title: category?.name || 'Category Not Found',
    };
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = demoCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const posts = demoPosts.filter((post) =>
    post.categories.some((cat) => cat.slug === slug)
  );

  return (
    <>
      <Header
        title={category.name}
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: category.name },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <BlogArchive
              posts={posts}
              blogStyle={siteConfig.blogStyle}
              currentPage={1}
              totalPages={1}
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
