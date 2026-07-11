import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import { siteConfig, demoPortfolio } from '@/config/site';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  return demoPortfolio.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const item = demoPortfolio.find((p) => p.slug === slug);
    return {
      title: item?.title || 'Portfolio Not Found',
    };
  });
}

export default async function SinglePortfolioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const itemIndex = demoPortfolio.findIndex((p) => p.slug === slug);
  const item = demoPortfolio[itemIndex];

  if (!item) {
    notFound();
  }

  const prevItem = itemIndex > 0 ? demoPortfolio[itemIndex - 1] : undefined;
  const nextItem = itemIndex < demoPortfolio.length - 1 ? demoPortfolio[itemIndex + 1] : undefined;

  return (
    <>
      <Header
        title={item.title}
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: item.title },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <article className="post_item_single post_type_portfolio">
              {item.featuredImage && (
                <div className="post_featured">
                  <Image
                    src={item.featuredImage}
                    alt={item.title}
                    width={1170}
                    height={658}
                    className="post_featured_image"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              )}

              <div className="post_meta post_meta_single">
                <span className="post_meta_item post_date">
                  <span className="icon-calendar" />
                  {formatDate(item.date)}
                </span>
                {item.client && (
                  <span className="post_meta_item post_client">
                    <span className="icon-user" />
                    {item.client}
                  </span>
                )}
                {item.categories.length > 0 && (
                  <span className="post_meta_item post_categories">
                    <span className="icon-folder" />
                    {item.categories.map((cat, index) => (
                      <span key={cat.slug}>
                        {index > 0 && ', '}
                        <Link href={`/portfolio-category/${cat.slug}`}>{cat.name}</Link>
                      </span>
                    ))}
                  </span>
                )}
              </div>

              <div
                className="post_content post_content_single entry-content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              {item.gallery && item.gallery.length > 0 && (
                <div className="post_gallery portfolio_gallery columns_wrap">
                  {item.gallery.map((img, index) => (
                    <div key={index} className="column-1_3">
                      <div className="post_gallery_item">
                        <Image
                          src={img}
                          alt={`${item.title} - Gallery ${index + 1}`}
                          width={600}
                          height={400}
                          className="post_gallery_image"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {item.projectUrl && (
                <div className="post_project_link">
                  <a
                    href={item.projectUrl}
                    className="sc_button sc_button_default"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              )}

              <div className="post_footer post_footer_single entry-footer">
                {item.tags && item.tags.length > 0 && (
                  <div className="post_tags_single">
                    {item.tags.map((tag) => (
                      <Link key={tag.slug} href={`/tag/${tag.slug}`} className="tag_item">
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                )}
                <div className="post_share">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`/portfolio/${item.slug}`)}`}
                    className="share_item share_facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Share on Facebook"
                  >
                    <span className="share_icon icon-facebook" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`/portfolio/${item.slug}`)}&text=${encodeURIComponent(item.title)}`}
                    className="share_item share_twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Share on Twitter"
                  >
                    <span className="share_icon icon-twitter" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`/portfolio/${item.slug}`)}`}
                    className="share_item share_linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Share on LinkedIn"
                  >
                    <span className="share_icon icon-linkedin" />
                  </a>
                </div>
              </div>
            </article>

            {/* Portfolio Navigation */}
            {(prevItem || nextItem) && (
              <div className="nav-links-single">
                {prevItem && (
                  <Link href={`/portfolio/${prevItem.slug}`} className="nav-prev">
                    <span className="nav-arrow">&larr;</span>
                    <span className="nav-text">{prevItem.title}</span>
                  </Link>
                )}
                {nextItem && (
                  <Link href={`/portfolio/${nextItem.slug}`} className="nav-next">
                    <span className="nav-text">{nextItem.title}</span>
                    <span className="nav-arrow">&rarr;</span>
                  </Link>
                )}
              </div>
            )}
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
