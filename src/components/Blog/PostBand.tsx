import Link from 'next/link';
import { Post } from '@/types';
import PostMeta from './PostMeta';

interface PostBandProps {
  post: Post;
}

export default function PostBand({ post }: PostBandProps) {
  return (
    <article className={`post_item post_layout_band post_format_${post.format}`}>
      <div className="columns_wrap">
        <div className="column-1_3">
          {post.featuredImage && (
            <div className="post_featured">
              <Link href={`/blog/${post.slug}`}>
                <img src={post.featuredImage} alt={post.title} />
              </Link>
            </div>
          )}
        </div>
        <div className="column-2_3">
          <div className="post_header">
            <h4 className="post_title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h4>
          </div>
          <div className="post_content">
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
        </div>
      </div>
    </article>
  );
}
