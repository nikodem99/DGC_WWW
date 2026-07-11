import Link from 'next/link';
import Image from 'next/image';
import { EventItem } from '@/types';

interface EventCardProps {
  event: EventItem;
  layout?: string;
}

export default function EventCard({ event, layout = 'default' }: EventCardProps) {
  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString('en-US', { month: 'short' });

  return (
    <div className={`sc_events_item sc_events_item_${layout}`}>
      {event.featuredImage && (
        <div className="sc_events_item_thumb">
          <Link href={`/events/${event.slug}`}>
            <Image
              src={event.featuredImage}
              alt={event.title}
              width={370}
              height={250}
              className="sc_events_item_thumb_img"
            />
          </Link>
        </div>
      )}
      <div className="sc_events_item_info">
        <div className="sc_events_item_date">
          <span className="sc_events_item_date_day">{day}</span>
          <span className="sc_events_item_date_month">{month}</span>
        </div>
        <div className="sc_events_item_content">
          <h4 className="sc_events_item_title">
            <Link href={`/events/${event.slug}`}>{event.title}</Link>
          </h4>
          {event.location && (
            <div className="sc_events_item_meta sc_events_item_location">
              <span className="sc_events_item_meta_icon icon-location" />
              <span className="sc_events_item_meta_value">{event.location}</span>
            </div>
          )}
          {event.time && (
            <div className="sc_events_item_meta sc_events_item_time">
              <span className="sc_events_item_meta_icon icon-clock" />
              <span className="sc_events_item_meta_value">{event.time}</span>
            </div>
          )}
          {event.price && (
            <div className="sc_events_item_meta sc_events_item_price">
              <span className="sc_events_item_meta_icon icon-tag" />
              <span className="sc_events_item_meta_value">{event.price}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
