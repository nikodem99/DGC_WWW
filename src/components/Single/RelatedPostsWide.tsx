import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { formatDate } from '@/lib/utils';

interface RelatedPostsWideProps {
  posts: Post[];
}

export default function RelatedPostsWide({ posts }: RelatedPostsWideProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="related_wrap related_style_wide">
      <div className="content_wrap">
        <h3 className="section_title related_posts_title">Related Posts</h3>
        <div className="related_wide_list">
          {posts.map((post) => (
            <article key={post.id} className="post_item related_item related_item_wide">
              {post.featuredImage && (
                <div className="post_featured">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      width={1200}
                      height={500}
                    />
                  </Link>
                </div>
              )}
              <div className="post_info">
                {post.categories.length > 0 && (
                  <div className="post_categories">
                    {post.categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/category/${cat.slug}`}
                        className="post_category"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
                <h4 className="post_title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h4>
                <div className="post_meta">
                  <span className="post_meta_item post_date">{formatDate(post.date)}</span>
                  <span className="post_meta_item post_author">
                    <Link
                      href={`/author/${encodeURIComponent(post.author.name.toLowerCase().replace(/\s+/g, '-'))}`}
                    >
                      {post.author.name}
                    </Link>
                  </span>
                  <span className="post_meta_item post_comments_count">
                    {post.commentsCount} {post.commentsCount === 1 ? 'Comment' : 'Comments'}
                  </span>
                </div>
                <p className="post_excerpt">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
