import Link from 'next/link';
import { Service } from '@/types';

interface ServiceDefaultProps {
  service: Service;
}

export default function ServiceDefault({ service }: ServiceDefaultProps) {
  return (
    <div className="sc_services_item">
      <div className="sc_services_item_icon">
        <div className="sc_services_item_icon_inner">
          <span className={service.icon} />
        </div>
      </div>
      <div className="sc_services_item_info">
        <h4 className="sc_services_item_title">
          <Link href={`/services/${service.slug}`}>{service.title}</Link>
        </h4>
        <div className="sc_services_item_subtitle">
          {service.categories.map((cat) => (
            <span key={cat.slug}>{cat.name}</span>
          ))}
        </div>
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
