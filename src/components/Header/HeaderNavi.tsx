'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import HeaderLogo from './HeaderLogo';

interface HeaderNaviProps {
  onMenuOpen: () => void;
  onSearchOpen: () => void;
}

export default function HeaderNavi({ onMenuOpen, onSearchOpen }: HeaderNaviProps) {
  const { navigation, showSearch } = siteConfig;

  return (
    <div className="top_panel_navi sc_layouts_row sc_layouts_row_type_compact sc_layouts_row_fixed sc_layouts_row_fixed_always sc_layouts_row_delimiter sc_layouts_hide_on_mobile">
      <div className="content_wrap">
        <div className="columns_wrap columns_fluid">
          <div className="sc_layouts_column sc_layouts_column_align_left sc_layouts_column_icons_position_left sc_layouts_column_fluid column-1_4">
            <div className="sc_layouts_item">
              <HeaderLogo />
            </div>
          </div>
          <div className="sc_layouts_column sc_layouts_column_align_right sc_layouts_column_icons_position_left sc_layouts_column_fluid column-3_4">
            <div className="sc_layouts_item">
              <nav className="menu_main_nav_area sc_layouts_menu sc_layouts_menu_default">
                <ul className="menu_main_nav">
                  {navigation.map((item) => {
                    const isMega = item.children && item.children.length >= 4;
                    return (
                      <li key={item.href} className={`menu-item${isMega ? ' menu-item-mega' : ''}`}>
                        <Link href={item.href}>{item.label}</Link>
                        {item.children && item.children.length > 0 && (
                          isMega ? (
                            <div className="mega_menu">
                              {item.children.map((child) => (
                                <div key={child.href} className="mega_menu_column">
                                  <div className="mega_menu_column_title">
                                    <Link href={child.href}>{child.label}</Link>
                                  </div>
                                  {child.children && child.children.length > 0 && (
                                    child.children.map((subChild) => (
                                      <Link key={subChild.href} href={subChild.href}>
                                        {subChild.label}
                                      </Link>
                                    ))
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <ul className="sub-menu">
                              {item.children.map((child) => (
                                <li key={child.href} className="menu-item">
                                  <Link href={child.href}>{child.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="sc_layouts_item">
              <button
                type="button"
                className="sc_layouts_iconed_text sc_layouts_menu_mobile_button"
                onClick={onMenuOpen}
                aria-label="Open mobile menu"
              >
                <span className="sc_layouts_item_icon icon-menu" />
              </button>
            </div>
            {showSearch && (
              <div className="sc_layouts_item">
                <button
                  type="button"
                  className="sc_layouts_iconed_text sc_layouts_menu_search_button"
                  onClick={onSearchOpen}
                  aria-label="Open search"
                >
                  <span className="sc_layouts_item_icon icon-search" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
