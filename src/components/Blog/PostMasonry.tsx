import Link from 'next/link';
import { Post } from '@/types';
import PostMeta from './PostMeta';

interface PostMasonryProps {
  post: Post;
  columns?: number;
}

export default function PostMasonry({ post, columns }: PostMasonryProps) {
  return (
    <article
      className={`post_item post_layout_masonry post_format_${post.format}${columns ? ` column-1_${columns}` : ''}`}
    >
      {post.featuredImage && (
        <div className="post_featured">
          <Link href={`/blog/${post.slug}`}>
            <img src={post.featuredImage} alt={post.title} />
          </Link>
        </div>
      )}
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
    </article>
  );
}
