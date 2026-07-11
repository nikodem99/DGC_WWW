import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BlogArchive from '@/components/Blog/BlogArchive';
import Sidebar from '@/components/Sidebar/Sidebar';
import { siteConfig, demoPosts } from '@/config/site';
import { Tag } from '@/types';

function getAllTags(): Tag[] {
  const tagMap = new Map<string, Tag>();
  demoPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!tagMap.has(tag.slug)) {
        tagMap.set(tag.slug, tag);
      }
    });
  });
  return Array.from(tagMap.values());
}

export function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const tags = getAllTags();
    const tag = tags.find((t) => t.slug === slug);
    return {
      title: tag ? `Tag: ${tag.name}` : 'Tag Not Found',
    };
  });
}

export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tags = getAllTags();
  const tag = tags.find((t) => t.slug === slug);

  if (!tag) {
    notFound();
  }

  const posts = demoPosts.filter((post) =>
    post.tags.some((t) => t.slug === slug)
  );

  return (
    <>
      <Header
        title={tag.name}
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: `Tag: ${tag.name}` },
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
