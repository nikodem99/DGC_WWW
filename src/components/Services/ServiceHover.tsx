'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Service } from '@/types';

interface ServiceHoverProps {
  service: Service;
}

export default function ServiceHover({ service }: ServiceHoverProps) {
  return (
    <div className="sc_services_item sc_services_item_hover">
      <div className="sc_services_item_featured">
        {service.featuredImage && (
          <Image
            src={service.featuredImage}
            alt={service.title}
            width={600}
            height={400}
            className="sc_services_item_featured_img"
          />
        )}
        <div className="sc_services_item_overlay">
          <div className="sc_services_item_overlay_content">
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
    </div>
  );
}
