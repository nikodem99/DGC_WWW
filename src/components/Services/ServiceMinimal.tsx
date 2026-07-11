import Link from 'next/link';
import { Service } from '@/types';

interface ServiceMinimalProps {
  service: Service;
}

export default function ServiceMinimal({ service }: ServiceMinimalProps) {
  return (
    <div className="sc_services_item sc_services_item_minimal">
      <div className="sc_services_item_content_wrap">
        <div className="sc_services_item_icon">
          <div className="sc_services_item_icon_inner">
            <span className={service.icon} />
          </div>
        </div>
        <div className="sc_services_item_info">
          <h4 className="sc_services_item_title">
            <Link href={`/services/${service.slug}`}>{service.title}</Link>
          </h4>
          <div className="sc_services_item_text">
            <p>{service.excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
