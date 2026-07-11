import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import PostMeta from '../Blog/PostMeta';

interface BannerStyle5Props {
  post: Post;
}

export default function BannerStyle5({ post }: BannerStyle5Props) {
  return (
    <div className="post_banner post_banner_style_5">
      <div className="content_wrap">
        <div className="post_banner_featured">
          {post.featuredImage && (
            <div className="post_banner_image">
              <Image
                src={post.featuredImage}
                alt={post.title}
                width={1200}
                height={600}
                priority
              />
            </div>
          )}
          <div className="post_banner_card">
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
    </div>
  );
}
