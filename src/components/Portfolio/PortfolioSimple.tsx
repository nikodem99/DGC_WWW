import Link from 'next/link';
import Image from 'next/image';
import { PortfolioItem } from '@/types';

interface PortfolioSimpleProps {
  item: PortfolioItem;
}

export default function PortfolioSimple({ item }: PortfolioSimpleProps) {
  return (
    <article className="post_item post_item_portfolio post_item_portfolio_simple">
      {item.featuredImage && (
        <div className="post_featured">
          <Link href={`/portfolio/${item.slug}`}>
            <Image
              src={item.featuredImage}
              alt={item.title}
              width={600}
              height={400}
              className="post_featured_image"
              style={{ width: '100%', height: 'auto' }}
            />
          </Link>
        </div>
      )}
      <div className="post_header">
        <h4 className="post_title">
          <Link href={`/portfolio/${item.slug}`}>{item.title}</Link>
        </h4>
      </div>
      {item.categories.length > 0 && (
        <div className="post_category">
          {item.categories.map((cat, index) => (
            <span key={cat.slug}>
              {index > 0 && ', '}
              <Link href={`/portfolio-category/${cat.slug}`}>{cat.name}</Link>
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
