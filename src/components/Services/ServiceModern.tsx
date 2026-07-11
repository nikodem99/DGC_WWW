import Link from 'next/link';
import Image from 'next/image';
import { Service } from '@/types';

interface ServiceModernProps {
  service: Service;
}

export default function ServiceModern({ service }: ServiceModernProps) {
  return (
    <div className="sc_services_item sc_services_item_modern">
      <div className="sc_services_item_content_wrap">
        {service.featuredImage && (
          <div className="sc_services_item_featured">
            <Link href={`/services/${service.slug}`}>
              <Image
                src={service.featuredImage}
                alt={service.title}
                width={600}
                height={400}
                className="sc_services_item_featured_img"
              />
            </Link>
          </div>
        )}
        <div className="sc_services_item_info">
          <div className="sc_services_item_icon">
            <div className="sc_services_item_icon_inner">
              <span className={service.icon} />
            </div>
          </div>
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
    </div>
  );
}
