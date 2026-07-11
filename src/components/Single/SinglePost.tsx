import { Post } from '@/types';
import SingleContent from './SingleContent';
import AuthorBio from './AuthorBio';
import PostNavigation from './PostNavigation';
import RelatedPosts from './RelatedPosts';

interface SinglePostProps {
  post: Post;
  relatedPosts?: Post[];
  prevPost?: { title: string; slug: string };
  nextPost?: { title: string; slug: string };
}

export default function SinglePost({ post, relatedPosts, prevPost, nextPost }: SinglePostProps) {
  return (
    <>
      <SingleContent post={post} />
      <AuthorBio author={post.author} />
      <PostNavigation prevPost={prevPost} nextPost={nextPost} />
      {relatedPosts && relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} />
      )}
    </>
  );
}
