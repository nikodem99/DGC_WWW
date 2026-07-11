'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { demoProducts } from '@/config/site';

interface CartItem {
  product: typeof demoProducts[0];
  quantity: number;
}

const initialCartItems: CartItem[] = [
  { product: demoProducts[0], quantity: 1 },
  { product: demoProducts[2], quantity: 2 },
  { product: demoProducts[4], quantity: 1 },
];

function getPrice(product: typeof demoProducts[0]): number {
  return parseFloat(product.salePrice || product.price);
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (index: number, qty: number) => {
    if (qty < 1) return;
    setCartItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, quantity: qty } : item))
    );
  };

  const removeItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + getPrice(item.product) * item.quantity,
    0
  );

  return (
    <>
      <Header
        title="Cart"
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Cart' },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content woocommerce-cart">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />

            {cartItems.length === 0 ? (
              <div className="cart-empty" style={{ textAlign: 'center', padding: '3em 0' }}>
                <p style={{ fontSize: '1.2em', marginBottom: '1.5em' }}>Your cart is currently empty.</p>
                <Link
                  href="/shop"
                  className="sc_button sc_button_default sc_button_size_normal"
                  style={{
                    display: 'inline-block',
                    padding: '0.8em 2em',
                    backgroundColor: 'var(--theme-color-text_link)',
                    color: 'var(--theme-color-inverse_text)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    fontSize: '0.85em',
                  }}
                >
                  Return to Shop
                </Link>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                <div style={{ flex: '2 1 600px' }}>
                  <table className="shop_table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--theme-color-bd_color)' }}>
                        <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: 700, fontSize: '0.85em', textTransform: 'uppercase', letterSpacing: '0.05em' }}>&nbsp;</th>
                        <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: 700, fontSize: '0.85em', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Product</th>
                        <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: 700, fontSize: '0.85em', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Price</th>
                        <th style={{ padding: '12px 8px', textAlign: 'center', fontWeight: 700, fontSize: '0.85em', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quantity</th>
                        <th style={{ padding: '12px 8px', textAlign: 'right', fontWeight: 700, fontSize: '0.85em', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subtotal</th>
                        <th style={{ padding: '12px 8px', textAlign: 'center', fontWeight: 700, fontSize: '0.85em', textTransform: 'uppercase', letterSpacing: '0.05em' }}>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => {
                        const price = getPrice(item.product);
                        const lineTotal = price * item.quantity;
                        return (
                          <tr
                            key={item.product.id}
                            style={{ borderBottom: '1px solid var(--theme-color-bd_color)' }}
                          >
                            <td style={{ padding: '15px 8px', width: '80px' }}>
                              <Image
                                src={item.product.featuredImage || '/images/no-image.jpg'}
                                alt={item.product.title}
                                width={70}
                                height={70}
                                style={{ objectFit: 'cover' }}
                              />
                            </td>
                            <td style={{ padding: '15px 8px' }}>
                              <Link
                                href={`/shop/${item.product.slug}`}
                                style={{ color: 'var(--theme-color-text_dark)', fontWeight: 600 }}
                              >
                                {item.product.title}
                              </Link>
                            </td>
                            <td style={{ padding: '15px 8px', color: 'var(--theme-color-text)' }}>
                              ${price.toFixed(2)}
                            </td>
                            <td style={{ padding: '15px 8px', textAlign: 'center' }}>
                              <input
                                type="number"
                                min={1}
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(index, parseInt(e.target.value) || 1)
                                }
                                style={{
                                  width: '60px',
                                  padding: '6px 8px',
                                  textAlign: 'center',
                                  border: '1px solid var(--theme-color-bd_color)',
                                  backgroundColor: 'var(--theme-color-input_bg_color)',
                                  color: 'var(--theme-color-text_dark)',
                                }}
                              />
                            </td>
                            <td
                              style={{
                                padding: '15px 8px',
                                textAlign: 'right',
                                fontWeight: 600,
                                color: 'var(--theme-color-text_dark)',
                              }}
                            >
                              ${lineTotal.toFixed(2)}
                            </td>
                            <td style={{ padding: '15px 8px', textAlign: 'center' }}>
                              <button
                                type="button"
                                onClick={() => removeItem(index)}
                                aria-label={`Remove ${item.product.title}`}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: 'var(--theme-color-text_light)',
                                  cursor: 'pointer',
                                  fontSize: '1.2em',
                                  padding: '4px',
                                  transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.color = 'var(--theme-color-text_link)')
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.color = 'var(--theme-color-text_light)')
                                }
                              >
                                &times;
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  <div style={{ marginTop: '1.5em' }}>
                    <Link
                      href="/shop"
                      style={{
                        color: 'var(--theme-color-text_link)',
                        fontWeight: 600,
                        fontSize: '0.9em',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      &larr; Continue Shopping
                    </Link>
                  </div>
                </div>

                <div style={{ flex: '1 1 280px' }}>
                  <div
                    className="cart_totals"
                    style={{
                      backgroundColor: 'var(--theme-color-alter_bg_color)',
                      padding: '25px 30px',
                      border: '1px solid var(--theme-color-bd_color)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.1em',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '1.2em',
                        paddingBottom: '0.8em',
                        borderBottom: '2px solid var(--theme-color-text_link)',
                      }}
                    >
                      Cart Totals
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 0',
                        borderBottom: '1px solid var(--theme-color-bd_color)',
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 0',
                        borderBottom: '1px solid var(--theme-color-bd_color)',
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Shipping</span>
                      <span style={{ color: 'var(--theme-color-text_light)' }}>
                        Calculated at checkout
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '15px 0 10px',
                        fontSize: '1.15em',
                        fontWeight: 700,
                      }}
                    >
                      <span>Total</span>
                      <span style={{ color: 'var(--theme-color-text_link)' }}>
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <Link
                      href="/checkout"
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'center',
                        marginTop: '1.2em',
                        padding: '0.9em 1.5em',
                        backgroundColor: 'var(--theme-color-text_link)',
                        color: 'var(--theme-color-inverse_text)',
                        fontWeight: 700,
                        fontSize: '0.85em',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <span id="footer_skip_link_anchor" className="gross_skip_link_anchor" />
      <Footer />
    </>
  );
}
