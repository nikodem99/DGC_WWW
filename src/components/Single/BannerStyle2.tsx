import Link from 'next/link';
import { Post } from '@/types';
import PostMeta from '../Blog/PostMeta';

interface BannerStyle2Props {
  post: Post;
}

export default function BannerStyle2({ post }: BannerStyle2Props) {
  return (
    <div
      className="post_banner post_banner_style_2"
      style={
        post.featuredImage
          ? { backgroundImage: `url(${post.featuredImage})` }
          : undefined
      }
    >
      <div className="post_banner_overlay" />
      <div className="content_wrap">
        <div className="post_banner_content">
          <div className="post_banner_categories">
            {post.categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="post_banner_category"
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <h1 className="post_title entry-title">{post.title}</h1>
          <PostMeta
            date={post.date}
            author={post.author.name}
            commentsCount={post.commentsCount}
          />
        </div>
      </div>
    </div>
  );
}
