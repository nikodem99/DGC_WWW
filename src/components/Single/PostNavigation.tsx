import Link from 'next/link';

interface PostNavigationProps {
  prevPost?: { title: string; slug: string };
  nextPost?: { title: string; slug: string };
}

export default function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <div className="nav-links-single">
      {prevPost && (
        <Link href={`/blog/${prevPost.slug}`} className="nav-prev">
          <span className="nav-arrow">&larr;</span>
          <span className="nav-text">{prevPost.title}</span>
        </Link>
      )}
      {nextPost && (
        <Link href={`/blog/${nextPost.slug}`} className="nav-next">
          <span className="nav-text">{nextPost.title}</span>
          <span className="nav-arrow">&rarr;</span>
        </Link>
      )}
    </div>
  );
}
