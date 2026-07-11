'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CartItem } from '@/types';
import { cn } from '@/lib/utils';

export default function CartWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [items] = useState<CartItem[]>([]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => {
    const price = item.product.onSale && item.product.salePrice
      ? parseFloat(item.product.salePrice)
      : parseFloat(item.product.price);
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className={cn('widget_shopping_cart', isOpen && 'widget_cart_open')}>
      <button
        type="button"
        className="widget_cart_toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle cart"
      >
        <span className="widget_cart_icon icon-cart" />
        {itemCount > 0 && (
          <span className="widget_cart_count">{itemCount}</span>
        )}
      </button>
      {isOpen && (
        <div className="widget_cart_dropdown">
          <h5 className="widget_cart_title">Shopping Cart</h5>
          {items.length === 0 ? (
            <p className="widget_cart_empty">Your cart is empty.</p>
          ) : (
            <>
              <ul className="widget_cart_list">
                {items.map((item) => (
                  <li key={item.product.id} className="widget_cart_item">
                    {item.product.featuredImage && (
                      <div className="widget_cart_item_image">
                        <Link href={`/shop/${item.product.slug}`}>
                          <Image
                            src={item.product.featuredImage}
                            alt={item.product.title}
                            width={60}
                            height={60}
                          />
                        </Link>
                      </div>
                    )}
                    <div className="widget_cart_item_info">
                      <h6 className="widget_cart_item_title">
                        <Link href={`/shop/${item.product.slug}`}>
                          {item.product.title}
                        </Link>
                      </h6>
                      <span className="widget_cart_item_qty">
                        {item.quantity} x $
                        {item.product.onSale && item.product.salePrice
                          ? item.product.salePrice
                          : item.product.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="widget_cart_total">
                <span className="widget_cart_total_label">Total:</span>
                <span className="widget_cart_total_price">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="widget_cart_actions">
                <Link href="/shop" className="widget_cart_button widget_cart_view">
                  View Cart
                </Link>
                <Link href="/shop" className="widget_cart_button widget_cart_checkout">
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
