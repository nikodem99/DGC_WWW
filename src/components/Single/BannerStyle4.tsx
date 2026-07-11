import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import PostMeta from '../Blog/PostMeta';

interface BannerStyle4Props {
  post: Post;
}

export default function BannerStyle4({ post }: BannerStyle4Props) {
  return (
    <div className="post_banner post_banner_style_4">
      <div className="content_wrap">
        <div className="post_banner_header">
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
      {post.featuredImage && (
        <div className="post_banner_image_wrap">
          <div className="post_banner_image">
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={1920}
              height={800}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
