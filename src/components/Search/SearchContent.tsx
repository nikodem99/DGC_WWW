'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import PostMeta from '@/components/Blog/PostMeta';
import ContentNoneSearch from '@/components/Blog/ContentNoneSearch';
import { demoPosts } from '@/config/site';
import { Post } from '@/types';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);
  const [results, setResults] = useState<Post[]>([]);

  useEffect(() => {
    setSearchInput(query);
    if (query.trim()) {
      const q = query.toLowerCase();
      const filtered = demoPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.content.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <>
      <div className="search_wrap search_style_normal">
        <form className="search_form" role="search" onSubmit={handleSearch}>
          <input
            type="text"
            className="search_field"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" className="search_submit">
            <span className="icon-search" />
          </button>
        </form>
      </div>
      {query.trim() ? (
        results.length > 0 ? (
          <div className="posts_container blog_style_excerpt">
            {results.map((post) => (
              <article
                key={post.id}
                className={`post_item post_item_container post_layout_excerpt post_format_${post.format}`}
              >
                {post.featuredImage && (
                  <div className="post_featured">
                    <Link href={`/blog/${post.slug}`}>
                      <img src={post.featuredImage} alt={post.title} />
                    </Link>
                  </div>
                )}
                <div className="post_header entry-header">
                  <h3 className="post_title entry-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                </div>
                <div className="post_content entry-content">
                  <PostMeta
                    date={post.date}
                    author={post.author.name}
                    categories={post.categories}
                    commentsCount={post.commentsCount}
                  />
                  <div className="post_content_inner">
                    <p>{post.excerpt}</p>
                  </div>
                  <p>
                    <Link href={`/blog/${post.slug}`} className="more-link">
                      Read More
                    </Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <ContentNoneSearch query={query} />
        )
      ) : null}
    </>
  );
}
