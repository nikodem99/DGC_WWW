import { EventItem } from '@/types';
import EventCard from './EventCard';

interface EventsGridProps {
  events: EventItem[];
  columns?: number;
}

export default function EventsGrid({ events, columns = 3 }: EventsGridProps) {
  return (
    <div className="sc_events sc_events_default">
      <div className={`sc_events_columns_wrap columns_wrap sc_item_columns sc_item_columns_${columns}`}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
