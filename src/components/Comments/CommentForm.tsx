'use client';

import { useState, FormEvent } from 'react';

export default function CommentForm() {
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Comment submission logic to be implemented
  }

  return (
    <div className="comments_form_wrap">
      <div className="comments_form">
        <h3 className="section_title comments_form_title">Leave a comment</h3>
        <form className="comment-form" onSubmit={handleSubmit}>
          <div className="comment-form-author">
            <input
              type="text"
              name="author"
              placeholder="Your Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="comment-form-email">
            <input
              type="email"
              name="email"
              placeholder="Your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="comment-form-comment">
            <textarea
              name="comment"
              placeholder="Your comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <div className="form-submit">
            <button type="submit" id="send_comment">
              Leave a comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
