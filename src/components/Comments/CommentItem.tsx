'use client';

import { Comment } from '@/types';

interface CommentItemProps {
  comment: Comment;
  depth?: number;
  maxDepth?: number;
}

export default function CommentItem({ comment, depth = 1, maxDepth = 5 }: CommentItemProps) {
  return (
    <li className="comment_item">
      <div className="comment_body">
        <div className="comment_author_avatar">
          {comment.author.avatar && (
            <img src={comment.author.avatar} alt={comment.author.name} />
          )}
        </div>
        <div className="comment_content">
          <div className="comment_info">
            {comment.author.isPostAuthor && (
              <div className="comment_bypostauthor">Post Author</div>
            )}
            <h6 className="comment_author">
              {comment.author.url ? (
                <a href={comment.author.url} target="_blank" rel="noopener noreferrer">
                  {comment.author.name}
                </a>
              ) : (
                comment.author.name
              )}
            </h6>
            <div className="comment_posted">
              <span className="comment_date">{comment.date}</span>
              <span className="comment_time">{comment.time}</span>
            </div>
          </div>
          <div className="comment_text_wrap">
            <div className="comment_text">{comment.content}</div>
          </div>
          <div className="comment_footer">
            <span className="reply comment_reply">
              <button type="button">Reply</button>
            </span>
          </div>
        </div>
      </div>
      {comment.children && comment.children.length > 0 && depth < maxDepth && (
        <ul className="children">
          {comment.children.map((child) => (
            <CommentItem
              key={child.id}
              comment={child}
              depth={depth + 1}
              maxDepth={maxDepth}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
