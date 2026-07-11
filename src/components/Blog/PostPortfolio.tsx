import Link from 'next/link';
import { Post } from '@/types';

interface PostPortfolioProps {
  post: Post;
}

export default function PostPortfolio({ post }: PostPortfolioProps) {
  return (
    <article className={`post_item post_layout_portfolio post_format_${post.format}`}>
      <div className="post_featured">
        {post.featuredImage && (
          <Link href={`/blog/${post.slug}`}>
            <img src={post.featuredImage} alt={post.title} />
          </Link>
        )}
        <div className="post_info">
          {post.categories.length > 0 && (
            <div className="post_categories">
              {post.categories.map((cat) => (
                <Link key={cat.slug} href={`/category/${cat.slug}`} className="post_category">
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
          <h4 className="post_title">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h4>
        </div>
      </div>
    </article>
  );
}
