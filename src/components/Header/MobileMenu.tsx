'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import HeaderLogo from './HeaderLogo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { navigation, socials } = siteConfig;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu_mobile_open');
    } else {
      document.body.classList.remove('menu_mobile_open');
    }
    return () => {
      document.body.classList.remove('menu_mobile_open');
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`menu_mobile_overlay${isOpen ? ' menu_mobile_overlay_show' : ''}`}
        onClick={onClose}
      />
      <div
        className={`menu_mobile menu_mobile_default sc_layouts_menu_mobile${isOpen ? ' menu_mobile_open' : ''}`}
      >
        <div className="menu_mobile_inner">
          <div className="menu_mobile_header_wrap">
            <div className="menu_mobile_header">
              <div className="menu_mobile_header_logo">
                <HeaderLogo type="mobile" />
              </div>
              <button
                type="button"
                className="menu_mobile_close icon-cancel"
                onClick={onClose}
                aria-label="Close mobile menu"
              />
            </div>
          </div>
          <div className="menu_mobile_content_wrap">
            <nav className="menu_mobile_nav_area">
              <ul className="menu_mobile_nav">
                {navigation.map((item) => (
                  <li key={item.href} className="menu-item">
                    <Link href={item.href} onClick={onClose}>
                      {item.label}
                    </Link>
                    {item.children && item.children.length > 0 && (
                      <ul className="sub-menu">
                        {item.children.map((child) => (
                          <li key={child.href} className="menu-item">
                            <Link href={child.href} onClick={onClose}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {socials && socials.length > 0 && (
            <div className="menu_mobile_socials">
              <div className="socials_wrap">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`social_item social_item_${social.name.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <span className={`social_icon ${social.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
