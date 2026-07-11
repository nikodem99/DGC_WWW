import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductGrid from '@/components/Shop/ProductGrid';
import { demoProducts } from '@/config/site';
import { cn } from '@/lib/utils';

export function generateStaticParams() {
  return demoProducts.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const product = demoProducts.find((p) => p.slug === slug);
    return {
      title: product?.title || 'Product Not Found',
    };
  });
}

export default async function SingleProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = demoProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = demoProducts
    .filter((p) => p.id !== product.id && p.categories.some(
      (cat) => product.categories.some((pc) => pc.slug === cat.slug)
    ))
    .slice(0, 3);

  const rating = product.rating ?? 0;

  const gallery = product.gallery && product.gallery.length > 0
    ? product.gallery
    : product.featuredImage
      ? [product.featuredImage]
      : [];

  return (
    <>
      <Header
        title={product.title}
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: product.title },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <div className="product_single">
              <div className="product_single_columns">
                <div className="product_single_gallery">
                  {gallery.map((img, index) => (
                    <div key={index} className="product_single_image">
                      <Image
                        src={img}
                        alt={`${product.title} - Image ${index + 1}`}
                        width={640}
                        height={640}
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                <div className="product_single_info">
                  <h1 className="product_single_title">{product.title}</h1>
                  <div className="product_single_rating">
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
                        ({product.reviewCount} {product.reviewCount === 1 ? 'review' : 'reviews'})
                      </span>
                    )}
                  </div>
                  <div className="product_single_price">
                    {product.onSale && product.salePrice ? (
                      <>
                        <del className="product_price_old">${product.price}</del>
                        <ins className="product_price_current">${product.salePrice}</ins>
                      </>
                    ) : (
                      <span className="product_price_current">${product.price}</span>
                    )}
                  </div>
                  {product.shortDescription && (
                    <p className="product_single_short_desc">{product.shortDescription}</p>
                  )}
                  <div className="product_single_stock">
                    {product.inStock ? (
                      <span className="product_in_stock">In Stock</span>
                    ) : (
                      <span className="product_out_of_stock">Out of Stock</span>
                    )}
                  </div>
                  <div className="product_single_actions">
                    <button
                      type="button"
                      className="product_add_to_cart_button"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                  <div className="product_single_meta">
                    {product.sku && (
                      <div className="product_meta_item">
                        <span className="product_meta_label">SKU:</span>
                        <span className="product_meta_value">{product.sku}</span>
                      </div>
                    )}
                    {product.categories.length > 0 && (
                      <div className="product_meta_item">
                        <span className="product_meta_label">Categories:</span>
                        <span className="product_meta_value">
                          {product.categories.map((cat, index) => (
                            <span key={cat.slug}>
                              {index > 0 && ', '}
                              <Link href={`/shop/?category=${cat.slug}`}>{cat.name}</Link>
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {product.tags.length > 0 && (
                      <div className="product_meta_item">
                        <span className="product_meta_label">Tags:</span>
                        <span className="product_meta_value">
                          {product.tags.map((tag, index) => (
                            <span key={tag.slug}>
                              {index > 0 && ', '}
                              <Link href={`/shop/?tag=${tag.slug}`}>{tag.name}</Link>
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="product_single_description">
                <h3 className="product_section_title">Description</h3>
                <div
                  className="product_description_content"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
              {relatedProducts.length > 0 && (
                <div className="product_single_related">
                  <h3 className="product_section_title">Related Products</h3>
                  <ProductGrid products={relatedProducts} columns={3} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <span id="footer_skip_link_anchor" className="gross_skip_link_anchor" />
      <Footer />
    </>
  );
}
