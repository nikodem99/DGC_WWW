import Link from 'next/link';
import Image from 'next/image';
import { Service } from '@/types';

interface ServiceClassicProps {
  service: Service;
}

export default function ServiceClassic({ service }: ServiceClassicProps) {
  return (
    <div className="sc_services_item sc_services_item_classic">
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
          <div className="sc_services_item_icon sc_services_item_icon_overlap">
            <div className="sc_services_item_icon_inner">
              <span className={service.icon} />
            </div>
          </div>
        </div>
      )}
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
