import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  layout?: string;
}

export default function ProductCard({ product, layout }: ProductCardProps) {
  const rating = product.rating ?? 0;

  return (
    <div className={cn('product_item', layout && `product_layout_${layout}`)}>
      <div className="product_image">
        <Link href={`/shop/${product.slug}`}>
          {product.featuredImage && (
            <Image
              src={product.featuredImage}
              alt={product.title}
              width={480}
              height={480}
            />
          )}
        </Link>
        <div className="product_badges">
          {product.onSale && (
            <span className="product_badge product_badge_sale">Sale</span>
          )}
          {product.isNew && (
            <span className="product_badge product_badge_new">New</span>
          )}
        </div>
        <div className="product_actions">
          <button type="button" className="product_action product_add_to_cart">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product_info">
        {product.categories.length > 0 && (
          <div className="product_categories">
            {product.categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/?category=${cat.slug}`}
                className="product_category"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        )}
        <h4 className="product_title">
          <Link href={`/shop/${product.slug}`}>{product.title}</Link>
        </h4>
        <div className="product_price">
          {product.onSale && product.salePrice ? (
            <>
              <del className="product_price_old">${product.price}</del>
              <ins className="product_price_current">${product.salePrice}</ins>
            </>
          ) : (
            <span className="product_price_current">${product.price}</span>
          )}
        </div>
        <div className="product_rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={cn(
                'product_star',
                star <= rating ? 'product_star_filled' : 'product_star_empty'
              )}
            />
          ))}
          {product.reviewCount !== undefined && (
            <span className="product_review_count">
              ({product.reviewCount})
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
