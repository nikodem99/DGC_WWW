import { Comment } from '@/types';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

interface CommentsProps {
  comments: Comment[];
  commentsOpen?: boolean;
  count?: number;
}

export default function Comments({ comments, commentsOpen = true, count }: CommentsProps) {
  const commentCount = count ?? comments.length;

  return (
    <section className="comments_wrap opened">
      <div className="comments_list_wrap">
        <h3 className="section_title comments_list_title">
          {commentCount} Comment{commentCount !== 1 ? 's' : ''}
        </h3>
        {comments.length > 0 && (
          <ul className="comments_list">
            {comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </ul>
        )}
      </div>
      {commentsOpen && <CommentForm />}
    </section>
  );
}
