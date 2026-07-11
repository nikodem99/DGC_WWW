import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { formatDate } from '@/lib/utils';

interface RelatedPostsListProps {
  posts: Post[];
}

export default function RelatedPostsList({ posts }: RelatedPostsListProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="related_wrap related_style_list">
      <div className="content_wrap">
        <h3 className="section_title related_posts_title">Related Posts</h3>
        <div className="related_list">
          {posts.map((post) => (
            <article key={post.id} className="post_item related_item related_item_list">
              {post.featuredImage && (
                <div className="post_featured related_item_thumb">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      width={120}
                      height={80}
                    />
                  </Link>
                </div>
              )}
              <div className="post_info">
                <h6 className="post_title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h6>
                <span className="post_date">{formatDate(post.date)}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
