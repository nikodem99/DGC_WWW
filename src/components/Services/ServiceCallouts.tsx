import Link from 'next/link';
import { Service } from '@/types';

interface ServiceCalloutsProps {
  service: Service;
  index: number;
}

export default function ServiceCallouts({ service, index }: ServiceCalloutsProps) {
  return (
    <div className="sc_services_item sc_services_item_callouts">
      <div className="sc_services_item_number">
        <span className="sc_services_item_number_value">{index + 1}</span>
      </div>
      <div className="sc_services_item_connector" />
      <div className="sc_services_item_info">
        <h4 className="sc_services_item_title">
          <Link href={`/services/${service.slug}`}>{service.title}</Link>
        </h4>
        <div className="sc_services_item_text">
          <p>{service.excerpt}</p>
        </div>
        <div className="sc_services_item_button">
          <Link href={`/services/${service.slug}`} className="sc_button sc_button_simple">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
