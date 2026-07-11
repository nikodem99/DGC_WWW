import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import EventsGrid from '@/components/Events/EventsGrid';
import { siteConfig, demoEvents } from '@/config/site';

export function generateStaticParams() {
  return demoEvents.map((event) => ({
    slug: event.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const event = demoEvents.find((e) => e.slug === slug);
    return {
      title: event?.title || 'Event Not Found',
    };
  });
}

export default async function SingleEventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = demoEvents.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let formattedEndDate: string | null = null;
  if (event.endDate) {
    const endDate = new Date(event.endDate);
    formattedEndDate = endDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  const relatedEvents = demoEvents
    .filter((e) => e.id !== event.id)
    .slice(0, 3);

  return (
    <>
      <Header
        title={event.title}
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: event.title },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <article className="post_item_single post_item_event">
              <div className="post_header entry-header">
                <h1 className="post_title entry-title">{event.title}</h1>
                {event.categories.length > 0 && (
                  <div className="post_meta">
                    <span className="post_meta_item post_categories">
                      {event.categories.map((cat, index) => (
                        <span key={cat.slug}>
                          {index > 0 && ', '}
                          {cat.name}
                        </span>
                      ))}
                    </span>
                  </div>
                )}
              </div>

              {event.featuredImage && (
                <div className="post_featured">
                  <Image
                    src={event.featuredImage}
                    alt={event.title}
                    width={1170}
                    height={658}
                    className="post_featured_image"
                    priority
                  />
                </div>
              )}

              <div className="sc_events_item_details">
                <div className="sc_events_item_details_inner">
                  <div className="sc_events_item_detail">
                    <span className="sc_events_item_detail_icon icon-calendar" />
                    <span className="sc_events_item_detail_label">Date:</span>
                    <span className="sc_events_item_detail_value">
                      {formattedDate}
                      {formattedEndDate && ` - ${formattedEndDate}`}
                    </span>
                  </div>

                  {event.time && (
                    <div className="sc_events_item_detail">
                      <span className="sc_events_item_detail_icon icon-clock" />
                      <span className="sc_events_item_detail_label">Time:</span>
                      <span className="sc_events_item_detail_value">{event.time}</span>
                    </div>
                  )}

                  {event.location && (
                    <div className="sc_events_item_detail">
                      <span className="sc_events_item_detail_icon icon-location" />
                      <span className="sc_events_item_detail_label">Location:</span>
                      <span className="sc_events_item_detail_value">{event.location}</span>
                    </div>
                  )}

                  {event.organizer && (
                    <div className="sc_events_item_detail">
                      <span className="sc_events_item_detail_icon icon-user" />
                      <span className="sc_events_item_detail_label">Organizer:</span>
                      <span className="sc_events_item_detail_value">{event.organizer}</span>
                    </div>
                  )}

                  {event.price && (
                    <div className="sc_events_item_detail">
                      <span className="sc_events_item_detail_icon icon-tag" />
                      <span className="sc_events_item_detail_label">Price:</span>
                      <span className="sc_events_item_detail_value">{event.price}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="post_content entry-content">
                <div className="post_content_description">
                  <p>{event.description}</p>
                </div>
                <div
                  className="post_content_inner"
                  dangerouslySetInnerHTML={{ __html: event.content }}
                />
              </div>

              <div className="sc_events_item_actions">
                {event.url && (
                  <Link href={event.url} className="sc_button sc_button_default sc_button_size_large">
                    Register Now
                  </Link>
                )}
              </div>
            </article>

            {relatedEvents.length > 0 && (
              <div className="related_wrap related_events">
                <h3 className="section_title related_wrap_title">Upcoming Events</h3>
                <EventsGrid events={relatedEvents} columns={3} />
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
