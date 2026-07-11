import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { formatDate } from '@/lib/utils';

interface RelatedPostsModernProps {
  posts: Post[];
}

export default function RelatedPostsModern({ posts }: RelatedPostsModernProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="related_wrap related_style_modern">
      <div className="content_wrap">
        <h3 className="section_title related_posts_title">Related Posts</h3>
        <div className="columns_wrap">
          {posts.map((post) => (
            <article
              key={post.id}
              className="post_item related_item related_item_modern column-1_3"
            >
              <div className="post_featured related_item_card">
                {post.featuredImage && (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    width={640}
                    height={480}
                  />
                )}
                <div className="post_overlay">
                  <div className="post_overlay_content">
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
                    <h6 className="post_title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h6>
                    <span className="post_date">{formatDate(post.date)}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
