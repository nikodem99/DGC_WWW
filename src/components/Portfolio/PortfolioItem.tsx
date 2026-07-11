import Link from 'next/link';
import Image from 'next/image';
import { PortfolioItem as PortfolioItemType } from '@/types';

interface PortfolioItemProps {
  item: PortfolioItemType;
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  return (
    <article className="post_item post_item_portfolio post_item_portfolio_default">
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
          <div className="post_info">
            <h4 className="post_title">
              <Link href={`/portfolio/${item.slug}`}>{item.title}</Link>
            </h4>
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
          </div>
        </div>
      )}
    </article>
  );
}
