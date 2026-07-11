import Link from 'next/link';
import { PostAuthor } from '@/types';

interface AuthorBioProps {
  author: PostAuthor;
}

export default function AuthorBio({ author }: AuthorBioProps) {
  const authorSlug = encodeURIComponent(author.name.toLowerCase().replace(/\s+/g, '-'));

  return (
    <div className="author_bio">
      <div className="author_avatar">
        {author.avatar && (
          <img src={author.avatar} alt={author.name} />
        )}
      </div>
      <div className="author_info">
        <h6 className="author_title">
          <Link href={`/author/${authorSlug}`}>{author.name}</Link>
        </h6>
        {author.bio && (
          <div className="author_description">{author.bio}</div>
        )}
      </div>
    </div>
  );
}
