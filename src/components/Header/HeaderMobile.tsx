'use client';

import HeaderLogo from './HeaderLogo';

interface HeaderMobileProps {
  onMenuOpen: () => void;
  onSearchOpen: () => void;
}

export default function HeaderMobile({ onMenuOpen, onSearchOpen }: HeaderMobileProps) {
  return (
    <div className="top_panel_mobile_navi sc_layouts_row sc_layouts_row_type_compact sc_layouts_row_delimiter sc_layouts_row_fixed sc_layouts_row_fixed_always sc_layouts_hide_on_large sc_layouts_hide_on_desktop sc_layouts_hide_on_notebook sc_layouts_hide_on_tablet">
      <div className="content_wrap">
        <div className="columns_wrap columns_fluid">
          <div className="sc_layouts_column sc_layouts_column_align_left sc_layouts_column_icons_position_left sc_layouts_column_fluid column-1_3">
            <div className="sc_layouts_item">
              <HeaderLogo type="mobile" />
            </div>
          </div>
          <div className="sc_layouts_column sc_layouts_column_align_right sc_layouts_column_icons_position_left sc_layouts_column_fluid column-2_3">
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
          </div>
        </div>
      </div>
    </div>
  );
}
