import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';

interface RelatedPostsShortProps {
  posts: Post[];
}

export default function RelatedPostsShort({ posts }: RelatedPostsShortProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="related_wrap related_style_short">
      <div className="content_wrap">
        <h3 className="section_title related_posts_title">Related Posts</h3>
        <div className="columns_wrap">
          {posts.map((post) => (
            <article
              key={post.id}
              className="post_item related_item related_item_short column-1_4"
            >
              {post.featuredImage && (
                <div className="post_featured">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      width={320}
                      height={200}
                    />
                  </Link>
                </div>
              )}
              <div className="post_header">
                <h6 className="post_title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h6>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
