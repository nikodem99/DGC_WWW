import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import PostMeta from '../Blog/PostMeta';

interface BannerStyle3Props {
  post: Post;
}

export default function BannerStyle3({ post }: BannerStyle3Props) {
  return (
    <div className="post_banner post_banner_style_3">
      <div className="content_wrap">
        <div className="post_banner_columns">
          <div className="post_banner_image_column">
            {post.featuredImage && (
              <div className="post_banner_image">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={960}
                  height={640}
                  priority
                />
              </div>
            )}
          </div>
          <div className="post_banner_info_column">
            <div className="post_banner_breadcrumbs">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className="breadcrumbs_delimiter" />
                <Link href="/blog">Blog</Link>
                <span className="breadcrumbs_delimiter" />
                <span className="breadcrumbs_current">{post.title}</span>
              </nav>
            </div>
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
