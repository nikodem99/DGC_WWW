'use client';

import { useEffect, useRef } from 'react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="search_wrap search_style_fullscreen search_opened">
      <div className="search_overlay" onClick={onClose} />
      <div className="search_form_wrap">
        <form className="search_form" role="search" action="/search" method="get">
          <button
            type="button"
            className="search_close icon-cancel"
            onClick={onClose}
            aria-label="Close search"
          />
          <label className="search_field_label" htmlFor="search_field">
            Search
          </label>
          <input
            ref={inputRef}
            id="search_field"
            type="search"
            name="s"
            className="search_field"
            placeholder="Type and press Enter"
            autoComplete="off"
          />
          <button type="submit" className="search_submit icon-search" aria-label="Submit search" />
        </form>
      </div>
    </div>
  );
}
