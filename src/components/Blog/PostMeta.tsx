import Link from 'next/link';
import { Category } from '@/types';
import { formatDate } from '@/lib/utils';

interface PostMetaProps {
  date?: string;
  author?: string;
  categories?: Category[];
  commentsCount?: number;
}

export default function PostMeta({ date, author, categories, commentsCount }: PostMetaProps) {
  return (
    <div className="post_meta">
      {date && (
        <span className="post_meta_item post_date">
          {formatDate(date)}
        </span>
      )}
      {author && (
        <span className="post_meta_item post_author">
          <Link href={`/author/${encodeURIComponent(author.toLowerCase().replace(/\s+/g, '-'))}`}>
            {author}
          </Link>
        </span>
      )}
      {categories && categories.length > 0 && (
        <span className="post_meta_item post_categories">
          {categories.map((cat, index) => (
            <span key={cat.slug}>
              {index > 0 && ', '}
              <Link href={`/category/${cat.slug}`}>{cat.name}</Link>
            </span>
          ))}
        </span>
      )}
      {commentsCount !== undefined && (
        <span className="post_meta_item post_comments_count">
          {commentsCount} {commentsCount === 1 ? 'Comment' : 'Comments'}
        </span>
      )}
    </div>
  );
}
