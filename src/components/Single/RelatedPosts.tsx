import Link from 'next/link';
import { Post } from '@/types';
import PostMeta from '../Blog/PostMeta';

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="related_wrap">
      <div className="content_wrap">
        <h3 className="section_title related_posts_title">Related Posts</h3>
        <div className="columns_wrap">
          {posts.map((post) => (
            <article
              key={post.id}
              className="post_item related_item column-1_3"
            >
              {post.featuredImage && (
                <div className="post_featured">
                  <Link href={`/blog/${post.slug}`}>
                    <img src={post.featuredImage} alt={post.title} />
                  </Link>
                </div>
              )}
              <div className="post_header">
                <h6 className="post_title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h6>
              </div>
              <PostMeta date={post.date} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
