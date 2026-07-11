'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import HeaderNavi from './HeaderNavi';
import HeaderMobile from './HeaderMobile';
import MobileMenu from './MobileMenu';
import SearchOverlay from './SearchOverlay';
import HeaderTitle from './HeaderTitle';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderProps {
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  showTitle?: boolean;
  headerImage?: string;
}

export default function Header({ title, breadcrumbs, showTitle = false, headerImage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const headerClasses = cn(
    'top_panel',
    'top_panel_default',
    headerImage && 'with_bg_image'
  );

  return (
    <header
      className={headerClasses}
      style={headerImage ? { backgroundImage: `url(${headerImage})` } : undefined}
    >
      <HeaderNavi
        onMenuOpen={() => setIsMobileMenuOpen(true)}
        onSearchOpen={() => setIsSearchOpen(true)}
      />
      <HeaderMobile
        onMenuOpen={() => setIsMobileMenuOpen(true)}
        onSearchOpen={() => setIsSearchOpen(true)}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      {showTitle && title && (
        <HeaderTitle title={title} breadcrumbs={breadcrumbs} />
      )}
    </header>
  );
}
