'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PortfolioItem } from '@/types';

interface PortfolioFillProps {
  item: PortfolioItem;
}

export default function PortfolioFill({ item }: PortfolioFillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`post_item post_item_portfolio post_item_portfolio_fill${isHovered ? ' hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item.featuredImage && (
        <div className="post_featured post_featured_fill">
          <Link href={`/portfolio/${item.slug}`}>
            <Image
              src={item.featuredImage}
              alt={item.title}
              width={600}
              height={400}
              className="post_featured_image"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </Link>
          <div className="post_info post_info_fill">
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
