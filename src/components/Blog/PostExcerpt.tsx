import Link from 'next/link';
import { Post } from '@/types';
import PostMeta from './PostMeta';

interface PostExcerptProps {
  post: Post;
}

export default function PostExcerpt({ post }: PostExcerptProps) {
  return (
    <article className={`post_item post_item_container post_layout_excerpt post_format_${post.format}`}>
      {post.sticky && (
        <span className="post_label label_sticky">Sticky</span>
      )}
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
  );
}
