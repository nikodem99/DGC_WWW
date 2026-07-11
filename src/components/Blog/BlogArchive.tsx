import { Post } from '@/types';
import PostExcerpt from './PostExcerpt';
import PostClassic from './PostClassic';
import PostBand from './PostBand';
import PostMasonry from './PostMasonry';
import PostPortfolio from './PostPortfolio';
import Pagination from './Pagination';

interface BlogArchiveProps {
  posts: Post[];
  blogStyle?: string;
  currentPage?: number;
  totalPages?: number;
}

export function BlogArchive({
  posts,
  blogStyle = 'excerpt',
  currentPage = 1,
  totalPages = 1,
}: BlogArchiveProps) {
  const renderPost = (post: Post) => {
    switch (blogStyle) {
      case 'classic':
        return <PostClassic key={post.id} post={post} columns={2} />;
      case 'band':
        return <PostBand key={post.id} post={post} />;
      case 'masonry':
        return <PostMasonry key={post.id} post={post} />;
      case 'portfolio':
        return <PostPortfolio key={post.id} post={post} />;
      case 'excerpt':
      default:
        return <PostExcerpt key={post.id} post={post} />;
    }
  };

  return (
    <div className="blog_archive_wrap">
      <div className={`posts_container blog_style_${blogStyle}`}>
        {posts.map(renderPost)}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl="/blog"
      />
    </div>
  );
}

export default BlogArchive;
