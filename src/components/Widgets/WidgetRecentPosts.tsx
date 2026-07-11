import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';

interface WidgetRecentPostsProps {
  posts: Post[];
  count?: number;
}

export default function WidgetRecentPosts({ posts, count = 5 }: WidgetRecentPostsProps) {
  const displayPosts = posts.slice(0, count);

  return (
    <aside className="widget widget_recent_posts">
      <h5 className="widget_title">Recent Posts</h5>
      <ul className="widget_recent_posts_list">
        {displayPosts.map((post) => (
          <li key={post.id} className="widget_recent_posts_item">
            {post.featuredImage && (
              <div className="widget_recent_posts_item_thumb">
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    width={80}
                    height={60}
                    className="widget_recent_posts_item_thumb_img"
                  />
                </Link>
              </div>
            )}
            <div className="widget_recent_posts_item_info">
              <h6 className="widget_recent_posts_item_title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h6>
              <div className="widget_recent_posts_item_date">{post.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
