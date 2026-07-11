'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

interface SidebarProps {
  position?: 'left' | 'right';
}

export function Sidebar({ position = 'right' }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div
      className={`sidebar widget_area ${position} sidebar_below sidebar_default`}
      role="complementary"
    >
      <span id="sidebar_skip_link_anchor" />
      <div className="sidebar_inner">
        {/* Search Widget */}
        <aside className="widget widget_search">
          <h5 className="widget_title">Search</h5>
          <form className="search_form" role="search" onSubmit={handleSearch}>
            <input
              type="text"
              className="search_field"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search_submit">
              <span className="icon-search" />
            </button>
          </form>
        </aside>

        {/* Categories Widget */}
        <aside className="widget widget_categories">
          <h5 className="widget_title">Categories</h5>
          <ul>
            <li>
              <Link href="/category/marketing">Marketing</Link>
            </li>
            <li>
              <Link href="/category/design">Design</Link>
            </li>
            <li>
              <Link href="/category/development">Development</Link>
            </li>
          </ul>
        </aside>

        {/* Recent Posts Widget */}
        <aside className="widget widget_recent_posts">
          <h5 className="widget_title">Recent Posts</h5>
          <ul>
            <li>
              <Link href="/blog/getting-started-with-digital-marketing">
                Getting Started with Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/blog/web-design-trends-2024">
                Web Design Trends for 2024
              </Link>
            </li>
            <li>
              <Link href="/blog/importance-of-mobile-first-approach">
                The Importance of Mobile-First Approach
              </Link>
            </li>
          </ul>
        </aside>

        {/* Tags Widget */}
        <aside className="widget widget_tag_cloud">
          <h5 className="widget_title">Tags</h5>
          <div className="tagcloud">
            <Link href="/tag/digital-marketing" className="tag-cloud-link">
              Digital Marketing
            </Link>
            <Link href="/tag/strategy" className="tag-cloud-link">
              Strategy
            </Link>
            <Link href="/tag/web-design" className="tag-cloud-link">
              Web Design
            </Link>
            <Link href="/tag/trends" className="tag-cloud-link">
              Trends
            </Link>
            <Link href="/tag/mobile" className="tag-cloud-link">
              Mobile
            </Link>
            <Link href="/tag/responsive" className="tag-cloud-link">
              Responsive
            </Link>
          </div>
        </aside>

        {/* About Widget */}
        <aside className="widget widget_about">
          <h5 className="widget_title">About {siteConfig.name}</h5>
          <p>{siteConfig.slogan}</p>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
