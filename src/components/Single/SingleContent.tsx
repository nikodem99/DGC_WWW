import Link from 'next/link';
import { Post } from '@/types';

interface SingleContentProps {
  post: Post;
}

export default function SingleContent({ post }: SingleContentProps) {
  return (
    <article className={`post_item_single post_type_post post_format_${post.format}`}>
      <div
        className="post_content post_content_single entry-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="post_footer post_footer_single entry-footer">
        {post.tags && post.tags.length > 0 && (
          <div className="post_tags_single">
            {post.tags.map((tag) => (
              <Link key={tag.slug} href={`/tag/${tag.slug}`} className="tag_item">
                {tag.name}
              </Link>
            ))}
          </div>
        )}
        <div className="post_share">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`/blog/${post.slug}`)}`}
            className="share_item share_facebook"
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Facebook"
          >
            <span className="share_icon icon-facebook" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
            className="share_item share_twitter"
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Twitter"
          >
            <span className="share_icon icon-twitter" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`/blog/${post.slug}`)}`}
            className="share_item share_linkedin"
            target="_blank"
            rel="noopener noreferrer"
            title="Share on LinkedIn"
          >
            <span className="share_icon icon-linkedin" />
          </a>
        </div>
      </div>
    </article>
  );
}
