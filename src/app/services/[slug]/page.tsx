import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import ServicesGrid from '@/components/Services/ServicesGrid';
import { siteConfig, demoServices } from '@/config/site';

export function generateStaticParams() {
  return demoServices.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const service = demoServices.find((s) => s.slug === slug);
    return {
      title: service?.title || 'Service Not Found',
    };
  });
}

export default async function SingleServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = demoServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = demoServices
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <Header
        title={service.title}
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <article className="post_item_single post_item_service">
              <div className="post_header entry-header">
                <div className="sc_services_item_icon sc_services_item_icon_single">
                  <div className="sc_services_item_icon_inner">
                    <span className={service.icon} />
                  </div>
                </div>
                <h1 className="post_title entry-title">{service.title}</h1>
                {service.categories.length > 0 && (
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      {service.categories.map((cat, index) => (
                        <span key={cat.slug}>
                          {index > 0 && ', '}
                          {cat.name}
                        </span>
                      ))}
                    </span>
                  </div>
                )}
              </div>

              {service.featuredImage && (
                <div className="post_featured">
                  <Image
                    src={service.featuredImage}
                    alt={service.title}
                    width={1170}
                    height={658}
                    className="post_featured_image"
                    priority
                  />
                </div>
              )}

              <div className="post_content entry-content">
                <div
                  className="post_content_inner"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              </div>

              {service.features && service.features.length > 0 && (
                <div className="sc_services_item_features">
                  <h3 className="sc_services_item_features_title">Features</h3>
                  <ul className="sc_services_item_features_list">
                    {service.features.map((feature, index) => (
                      <li key={index} className="sc_services_item_features_item">
                        <span className="sc_services_item_features_item_marker icon-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.price && (
                <div className="sc_services_item_price_wrap">
                  <h3 className="sc_services_item_price_title">Price</h3>
                  <div className="sc_services_item_price_value">
                    <span className="sc_services_item_price_amount">{service.price}</span>
                  </div>
                </div>
              )}
            </article>

            {relatedServices.length > 0 && (
              <div className="related_wrap related_services">
                <h3 className="section_title related_wrap_title">Related Services</h3>
                <ServicesGrid
                  services={relatedServices}
                  layout="default"
                  columns={3}
                />
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
