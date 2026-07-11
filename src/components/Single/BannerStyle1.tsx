import Link from 'next/link';
import { Post } from '@/types';
import PostMeta from '../Blog/PostMeta';

interface BannerStyle1Props {
  post: Post;
}

export default function BannerStyle1({ post }: BannerStyle1Props) {
  return (
    <div className="post_banner post_banner_style_1">
      <div className="content_wrap">
        <div className="post_banner_breadcrumbs">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumbs_delimiter" />
            <Link href="/blog">Blog</Link>
            <span className="breadcrumbs_delimiter" />
            {post.categories.length > 0 && (
              <>
                <Link href={`/category/${post.categories[0].slug}`}>
                  {post.categories[0].name}
                </Link>
                <span className="breadcrumbs_delimiter" />
              </>
            )}
            <span className="breadcrumbs_current">{post.title}</span>
          </nav>
        </div>
        <div className="post_banner_header">
          <h1 className="post_title entry-title">{post.title}</h1>
          <PostMeta
            date={post.date}
            author={post.author.name}
            categories={post.categories}
            commentsCount={post.commentsCount}
          />
        </div>
      </div>
    </div>
  );
}
