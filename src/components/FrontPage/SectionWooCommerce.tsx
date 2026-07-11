'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FrontPageSection, Product } from '@/types';
import { demoProducts } from '@/config/site';
import { hexToRgba } from './SectionTitle';

interface SectionWooCommerceProps {
  section: FrontPageSection;
  products?: Product[];
}

export function SectionWooCommerce({
  section,
  products = demoProducts,
}: SectionWooCommerceProps) {
  const outerClasses = [
    'front_page_section',
    'front_page_section_woocommerce',
    section.scheme ? `scheme_${section.scheme}` : '',
    section.paddings ? `front_page_section_paddings_${section.paddings}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  const outerStyle: React.CSSProperties = {};
  if (section.bgImage) {
    outerStyle.backgroundImage = `url(${section.bgImage})`;
  }

  const innerStyle: React.CSSProperties = {};
  if (section.bgColor && section.bgMask != null && section.bgMask > 0) {
    innerStyle.backgroundColor =
      section.bgMask < 1
        ? hexToRgba(section.bgColor, section.bgMask)
        : section.bgColor;
  }

  const featured = products.slice(0, 4);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star_icon ${i <= rating ? 'icon-star-filled' : 'icon-star-empty'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className={outerClasses} style={outerStyle}>
      <div
        className="front_page_section_inner front_page_section_woocommerce_inner"
        style={innerStyle}
      >
        <div className="front_page_section_content_wrap front_page_section_woocommerce_content_wrap content_wrap">
          {section.caption && (
            <h2 className="front_page_section_caption front_page_section_woocommerce_caption">
              {section.caption}
            </h2>
          )}
          {section.description && (
            <div className="front_page_section_description front_page_section_woocommerce_description">
              {section.description}
            </div>
          )}

          <div className="sc_woocommerce_products">
            <div className="sc_woocommerce_products_grid sc_item_columns sc_item_columns_4">
              {featured.map((product) => (
                <div key={product.id} className="product_item">
                  <div className="product_item_thumb">
                    {product.featuredImage && (
                      <Link href={`/shop/${product.slug}`}>
                        <Image
                          src={product.featuredImage}
                          alt={product.title}
                          width={370}
                          height={370}
                          className="product_item_thumb_img"
                        />
                      </Link>
                    )}
                    {product.onSale && (
                      <span className="product_item_badge product_item_badge_sale">Sale</span>
                    )}
                    {product.isNew && (
                      <span className="product_item_badge product_item_badge_new">New</span>
                    )}
                    <div className="product_item_actions">
                      <Link
                        href={`/shop/${product.slug}`}
                        className="product_item_action product_item_action_view"
                        title="View Product"
                      >
                        <span className="icon-eye" />
                      </Link>
                      <button
                        className="product_item_action product_item_action_cart"
                        title="Add to Cart"
                      >
                        <span className="icon-cart" />
                      </button>
                    </div>
                  </div>
                  <div className="product_item_info">
                    <div className="product_item_categories">
                      {product.categories.map((cat) => (
                        <span key={cat.slug} className="product_item_category">
                          {cat.name}
                        </span>
                      ))}
                    </div>
                    <h4 className="product_item_title">
                      <Link href={`/shop/${product.slug}`}>{product.title}</Link>
                    </h4>
                    {product.rating != null && (
                      <div className="product_item_rating">
                        <div className="product_item_rating_stars">
                          {renderStars(product.rating)}
                        </div>
                        {product.reviewCount != null && (
                          <span className="product_item_rating_count">
                            ({product.reviewCount})
                          </span>
                        )}
                      </div>
                    )}
                    <div className="product_item_price">
                      {product.salePrice ? (
                        <>
                          <del className="product_item_price_old">${product.price}</del>
                          <ins className="product_item_price_current">${product.salePrice}</ins>
                        </>
                      ) : (
                        <span className="product_item_price_current">${product.price}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {section.buttons && section.buttons.length > 0 && (
            <div className="front_page_section_buttons">
              {section.buttons.map((btn, index) => (
                <a
                  key={index}
                  href={btn.url}
                  className={`sc_button sc_button_${btn.style || 'default'}`}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
