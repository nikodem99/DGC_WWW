import Link from 'next/link';
import { Service } from '@/types';

interface ServiceIconsProps {
  service: Service;
}

export default function ServiceIcons({ service }: ServiceIconsProps) {
  return (
    <div className="sc_services_item sc_services_item_icons">
      <Link href={`/services/${service.slug}`} className="sc_services_item_link">
        <div className="sc_services_item_icon">
          <div className="sc_services_item_icon_inner sc_services_item_icon_large">
            <span className={service.icon} />
          </div>
        </div>
        <h4 className="sc_services_item_title">{service.title}</h4>
        <div className="sc_services_item_hover_content">
          <div className="sc_services_item_text">
            <p>{service.excerpt}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
