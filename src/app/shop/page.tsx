'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import ProductGrid from '@/components/Shop/ProductGrid';
import { siteConfig, demoProducts } from '@/config/site';

type SortOption = 'default' | 'price_asc' | 'price_desc' | 'newest';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    demoProducts.forEach((p) =>
      p.categories.forEach((c) => cats.add(c.name))
    );
    return Array.from(cats);
  }, []);

  const filteredProducts = useMemo(() => {
    let products =
      activeCategory === 'all'
        ? [...demoProducts]
        : demoProducts.filter((p) =>
            p.categories.some((c) => c.name === activeCategory)
          );

    switch (sortBy) {
      case 'price_asc':
        products.sort(
          (a, b) =>
            parseFloat(a.salePrice || a.price) -
            parseFloat(b.salePrice || b.price)
        );
        break;
      case 'price_desc':
        products.sort(
          (a, b) =>
            parseFloat(b.salePrice || b.price) -
            parseFloat(a.salePrice || a.price)
        );
        break;
      case 'newest':
        products.sort(
          (a, b) => (a.isNew ? -1 : 0) - (b.isNew ? -1 : 0)
        );
        break;
      default:
        break;
    }

    return products;
  }, [activeCategory, sortBy]);

  const buttonBase: React.CSSProperties = {
    padding: '6px 16px',
    border: '1px solid var(--theme-color-bd_color)',
    cursor: 'pointer',
    fontSize: '0.82em',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
    color: 'var(--theme-color-text)',
  };

  const activeButtonStyle: React.CSSProperties = {
    ...buttonBase,
    backgroundColor: 'var(--theme-color-text_link)',
    color: 'var(--theme-color-inverse_text)',
    borderColor: 'var(--theme-color-text_link)',
  };

  return (
    <>
      <Header
        title="Shop"
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop' },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />

            {/* Filter Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '15px',
                marginBottom: '30px',
                paddingBottom: '20px',
                borderBottom: '1px solid var(--theme-color-bd_color)',
              }}
            >
              {/* Category Filters */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  style={activeCategory === 'all' ? activeButtonStyle : buttonBase}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    style={activeCategory === cat ? activeButtonStyle : buttonBase}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  style={{
                    padding: '6px 12px',
                    border: '1px solid var(--theme-color-bd_color)',
                    backgroundColor: 'var(--theme-color-input_bg_color)',
                    color: 'var(--theme-color-text_dark)',
                    fontSize: '0.82em',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  <option value="default">Default Sorting</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>

                {/* Grid/List Toggle */}
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    aria-label="Grid view"
                    style={{
                      ...buttonBase,
                      padding: '6px 10px',
                      ...(viewMode === 'grid'
                        ? {
                            backgroundColor: 'var(--theme-color-text_link)',
                            color: 'var(--theme-color-inverse_text)',
                            borderColor: 'var(--theme-color-text_link)',
                          }
                        : {}),
                    }}
                  >
                    &#9638;&#9638;
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    aria-label="List view"
                    style={{
                      ...buttonBase,
                      padding: '6px 10px',
                      ...(viewMode === 'list'
                        ? {
                            backgroundColor: 'var(--theme-color-text_link)',
                            color: 'var(--theme-color-inverse_text)',
                            borderColor: 'var(--theme-color-text_link)',
                          }
                        : {}),
                    }}
                  >
                    &#9776;
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <p
              style={{
                marginBottom: '20px',
                fontSize: '0.9em',
                color: 'var(--theme-color-text_light)',
              }}
            >
              Showing {filteredProducts.length} of {demoProducts.length} products
            </p>

            <ProductGrid
              products={filteredProducts}
              columns={viewMode === 'grid' ? 3 : 1}
            />
          </div>
          {siteConfig.showSidebar && (
            <Sidebar position={siteConfig.sidebarPosition as 'left' | 'right'} />
          )}
        </div>
      </div>
      <span id="footer_skip_link_anchor" className="gross_skip_link_anchor" />
      <Footer />
    </>
  );
}
