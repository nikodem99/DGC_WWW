'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { demoProducts } from '@/config/site';

const orderItems = [
  { product: demoProducts[0], quantity: 1 },
  { product: demoProducts[2], quantity: 2 },
  { product: demoProducts[4], quantity: 1 },
];

function getPrice(product: typeof demoProducts[0]): number {
  return parseFloat(product.salePrice || product.price);
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid var(--theme-color-bd_color)',
  backgroundColor: 'var(--theme-color-input_bg_color)',
  color: 'var(--theme-color-text_dark)',
  fontSize: '0.9em',
  outline: 'none',
  transition: 'border-color 0.3s ease',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontWeight: 600,
  fontSize: '0.85em',
  marginBottom: '6px',
  color: 'var(--theme-color-text_dark)',
};

const fieldWrapStyle: React.CSSProperties = {
  marginBottom: '18px',
};

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('bank_transfer');

  const subtotal = orderItems.reduce(
    (sum, item) => sum + getPrice(item.product) * item.quantity,
    0
  );

  return (
    <>
      <Header
        title="Checkout"
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Checkout' },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content woocommerce-checkout">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />

            <form className="checkout_form" onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                {/* Billing Details */}
                <div className="woocommerce-billing-fields" style={{ flex: '1 1 500px' }}>
                  <h3
                    style={{
                      fontSize: '1.2em',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '1.5em',
                      paddingBottom: '0.8em',
                      borderBottom: '2px solid var(--theme-color-text_link)',
                    }}
                  >
                    Billing Details
                  </h3>

                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ ...fieldWrapStyle, flex: 1 }}>
                      <label style={labelStyle}>
                        First Name <span style={{ color: 'var(--theme-color-text_link)' }}>*</span>
                      </label>
                      <input type="text" style={inputStyle} required />
                    </div>
                    <div style={{ ...fieldWrapStyle, flex: 1 }}>
                      <label style={labelStyle}>
                        Last Name <span style={{ color: 'var(--theme-color-text_link)' }}>*</span>
                      </label>
                      <input type="text" style={inputStyle} required />
                    </div>
                  </div>

                  <div style={fieldWrapStyle}>
                    <label style={labelStyle}>Company Name (optional)</label>
                    <input type="text" style={inputStyle} />
                  </div>

                  <div style={fieldWrapStyle}>
                    <label style={labelStyle}>
                      Country / Region <span style={{ color: 'var(--theme-color-text_link)' }}>*</span>
                    </label>
                    <select style={inputStyle} required defaultValue="">
                      <option value="" disabled>Select a country...</option>
                      <option value="US">United States</option>
                      <option value="GB">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                    </select>
                  </div>

                  <div style={fieldWrapStyle}>
                    <label style={labelStyle}>
                      Street Address <span style={{ color: 'var(--theme-color-text_link)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      style={{ ...inputStyle, marginBottom: '10px' }}
                      placeholder="House number and street name"
                      required
                    />
                    <input
                      type="text"
                      style={inputStyle}
                      placeholder="Apartment, suite, unit, etc. (optional)"
                    />
                  </div>

                  <div style={fieldWrapStyle}>
                    <label style={labelStyle}>
                      Town / City <span style={{ color: 'var(--theme-color-text_link)' }}>*</span>
                    </label>
                    <input type="text" style={inputStyle} required />
                  </div>

                  <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ ...fieldWrapStyle, flex: 1 }}>
                      <label style={labelStyle}>
                        State / County <span style={{ color: 'var(--theme-color-text_link)' }}>*</span>
                      </label>
                      <input type="text" style={inputStyle} required />
                    </div>
                    <div style={{ ...fieldWrapStyle, flex: 1 }}>
                      <label style={labelStyle}>
                        Postcode / ZIP <span style={{ color: 'var(--theme-color-text_link)' }}>*</span>
                      </label>
                      <input type="text" style={inputStyle} required />
                    </div>
                  </div>

                  <div style={fieldWrapStyle}>
                    <label style={labelStyle}>
                      Phone <span style={{ color: 'var(--theme-color-text_link)' }}>*</span>
                    </label>
                    <input type="tel" style={inputStyle} required />
                  </div>

                  <div style={fieldWrapStyle}>
                    <label style={labelStyle}>
                      Email Address <span style={{ color: 'var(--theme-color-text_link)' }}>*</span>
                    </label>
                    <input type="email" style={inputStyle} required />
                  </div>

                  <div style={fieldWrapStyle}>
                    <label style={labelStyle}>Order Notes (optional)</label>
                    <textarea
                      style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
                      placeholder="Notes about your order, e.g. special notes for delivery."
                    />
                  </div>
                </div>

                {/* Order Review */}
                <div className="order_review" style={{ flex: '1 1 350px' }}>
                  <h3
                    style={{
                      fontSize: '1.2em',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '1.5em',
                      paddingBottom: '0.8em',
                      borderBottom: '2px solid var(--theme-color-text_link)',
                    }}
                  >
                    Your Order
                  </h3>

                  <div
                    style={{
                      backgroundColor: 'var(--theme-color-alter_bg_color)',
                      padding: '25px',
                      border: '1px solid var(--theme-color-bd_color)',
                      marginBottom: '25px',
                    }}
                  >
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr
                          style={{
                            borderBottom: '2px solid var(--theme-color-bd_color)',
                          }}
                        >
                          <th
                            style={{
                              padding: '10px 0',
                              textAlign: 'left',
                              fontWeight: 700,
                              fontSize: '0.85em',
                              textTransform: 'uppercase',
                            }}
                          >
                            Product
                          </th>
                          <th
                            style={{
                              padding: '10px 0',
                              textAlign: 'right',
                              fontWeight: 700,
                              fontSize: '0.85em',
                              textTransform: 'uppercase',
                            }}
                          >
                            Subtotal
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderItems.map((item) => {
                          const price = getPrice(item.product);
                          return (
                            <tr
                              key={item.product.id}
                              style={{
                                borderBottom: '1px solid var(--theme-color-bd_color)',
                              }}
                            >
                              <td style={{ padding: '10px 0', fontSize: '0.9em' }}>
                                {item.product.title}{' '}
                                <span style={{ color: 'var(--theme-color-text_light)' }}>
                                  x {item.quantity}
                                </span>
                              </td>
                              <td
                                style={{
                                  padding: '10px 0',
                                  textAlign: 'right',
                                  fontWeight: 600,
                                }}
                              >
                                ${(price * item.quantity).toFixed(2)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr style={{ borderBottom: '1px solid var(--theme-color-bd_color)' }}>
                          <td style={{ padding: '10px 0', fontWeight: 600 }}>Subtotal</td>
                          <td style={{ padding: '10px 0', textAlign: 'right', fontWeight: 600 }}>
                            ${subtotal.toFixed(2)}
                          </td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--theme-color-bd_color)' }}>
                          <td style={{ padding: '10px 0', fontWeight: 600 }}>Shipping</td>
                          <td
                            style={{
                              padding: '10px 0',
                              textAlign: 'right',
                              color: 'var(--theme-color-text_light)',
                              fontSize: '0.9em',
                            }}
                          >
                            Free shipping
                          </td>
                        </tr>
                        <tr>
                          <td style={{ padding: '12px 0', fontWeight: 700, fontSize: '1.1em' }}>
                            Total
                          </td>
                          <td
                            style={{
                              padding: '12px 0',
                              textAlign: 'right',
                              fontWeight: 700,
                              fontSize: '1.1em',
                              color: 'var(--theme-color-text_link)',
                            }}
                          >
                            ${subtotal.toFixed(2)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* Payment Methods */}
                  <div style={{ marginBottom: '25px' }}>
                    <h4
                      style={{
                        fontSize: '0.95em',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '15px',
                      }}
                    >
                      Payment Method
                    </h4>

                    <div
                      style={{
                        border: '1px solid var(--theme-color-bd_color)',
                        marginBottom: '10px',
                        backgroundColor:
                          paymentMethod === 'bank_transfer'
                            ? 'var(--theme-color-alter_bg_color)'
                            : 'transparent',
                      }}
                    >
                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px 15px',
                          cursor: 'pointer',
                          fontWeight: 600,
                          fontSize: '0.9em',
                        }}
                      >
                        <input
                          type="radio"
                          name="payment_method"
                          value="bank_transfer"
                          checked={paymentMethod === 'bank_transfer'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Direct Bank Transfer
                      </label>
                      {paymentMethod === 'bank_transfer' && (
                        <div
                          style={{
                            padding: '0 15px 12px',
                            fontSize: '0.85em',
                            color: 'var(--theme-color-text_light)',
                          }}
                        >
                          Make your payment directly into our bank account. Please use your Order ID
                          as the payment reference.
                        </div>
                      )}
                    </div>

                    <div
                      style={{
                        border: '1px solid var(--theme-color-bd_color)',
                        backgroundColor:
                          paymentMethod === 'cod'
                            ? 'var(--theme-color-alter_bg_color)'
                            : 'transparent',
                      }}
                    >
                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px 15px',
                          cursor: 'pointer',
                          fontWeight: 600,
                          fontSize: '0.9em',
                        }}
                      >
                        <input
                          type="radio"
                          name="payment_method"
                          value="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Cash on Delivery
                      </label>
                      {paymentMethod === 'cod' && (
                        <div
                          style={{
                            padding: '0 15px 12px',
                            fontSize: '0.85em',
                            color: 'var(--theme-color-text_light)',
                          }}
                        >
                          Pay with cash upon delivery.
                        </div>
                      )}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.8em',
                      color: 'var(--theme-color-text_light)',
                      marginBottom: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    Your personal data will be used to process your order, support your experience
                    throughout this website, and for other purposes described in our privacy policy.
                  </p>

                  <button
                    type="submit"
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '1em 1.5em',
                      backgroundColor: 'var(--theme-color-text_link)',
                      color: 'var(--theme-color-inverse_text)',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: '0.9em',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <span id="footer_skip_link_anchor" className="gross_skip_link_anchor" />
      <Footer />
    </>
  );
}
