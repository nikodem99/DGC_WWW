import Link from 'next/link';
import { Service } from '@/types';

interface ServicePriceProps {
  service: Service;
}

export default function ServicePrice({ service }: ServicePriceProps) {
  return (
    <div className="sc_services_item sc_services_item_price">
      <div className="sc_services_item_icon">
        <div className="sc_services_item_icon_inner">
          <span className={service.icon} />
        </div>
      </div>
      <div className="sc_services_item_info">
        <h4 className="sc_services_item_title">
          <Link href={`/services/${service.slug}`}>{service.title}</Link>
        </h4>
        {service.price && (
          <div className="sc_services_item_price_value">
            <span className="sc_services_item_price_amount">{service.price}</span>
          </div>
        )}
        <div className="sc_services_item_text">
          <p>{service.excerpt}</p>
        </div>
        {service.features && service.features.length > 0 && (
          <ul className="sc_services_item_features_list">
            {service.features.map((feature, index) => (
              <li key={index} className="sc_services_item_features_item">
                <span className="sc_services_item_features_item_marker icon-check" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="sc_services_item_button">
          <Link href={`/services/${service.slug}`} className="sc_button sc_button_simple">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
