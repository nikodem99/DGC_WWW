import Image from 'next/image';
import Link from 'next/link';

interface WidgetBannerProps {
  image: string;
  link: string;
  title?: string;
}

export default function WidgetBanner({ image, link, title }: WidgetBannerProps) {
  return (
    <aside className="widget widget_banner">
      {title && <h5 className="widget_title">{title}</h5>}
      <div className="widget_banner_inner">
        <Link href={link} className="widget_banner_link">
          <Image
            src={image}
            alt={title || 'Banner'}
            width={370}
            height={370}
            className="widget_banner_img"
          />
        </Link>
      </div>
    </aside>
  );
}
