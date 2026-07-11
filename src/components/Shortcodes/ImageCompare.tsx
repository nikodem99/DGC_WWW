'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface ImageCompareProps {
  imageBefore: string;
  imageAfter: string;
  label?: string;
}

export default function ImageCompare({
  imageBefore,
  imageAfter,
  label,
}: ImageCompareProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      dragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  useEffect(() => {
    const handler = () => {
      dragging.current = false;
    };
    window.addEventListener('pointerup', handler);
    return () => window.removeEventListener('pointerup', handler);
  }, []);

  return (
    <div className="sc_icompare">
      {label && <div className="sc_icompare_label">{label}</div>}
      <div
        ref={containerRef}
        className="sc_icompare_inner"
        style={{ position: 'relative', overflow: 'hidden', cursor: 'ew-resize' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div className="sc_icompare_after">
          <img
            src={imageAfter}
            alt="After"
            style={{ display: 'block', width: '100%', height: 'auto' }}
            draggable={false}
          />
        </div>
        <div
          className="sc_icompare_before"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${position}%`,
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src={imageBefore}
            alt="Before"
            style={{
              display: 'block',
              width: containerRef.current
                ? `${containerRef.current.offsetWidth}px`
                : '100%',
              maxWidth: 'none',
              height: 'auto',
            }}
            draggable={false}
          />
        </div>
        <div
          className="sc_icompare_divider"
          style={{
            position: 'absolute',
            top: 0,
            left: `${position}%`,
            width: '4px',
            height: '100%',
            marginLeft: '-2px',
            backgroundColor: '#fff',
            boxShadow: '0 0 4px rgba(0,0,0,0.5)',
            zIndex: 2,
          }}
        >
          <div
            className="sc_icompare_handle"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '40px',
              height: '40px',
              marginTop: '-20px',
              marginLeft: '-20px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              boxShadow: '0 0 6px rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderRight: '6px solid #333',
                marginRight: '4px',
              }}
            />
            <span
              style={{
                display: 'inline-block',
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderLeft: '6px solid #333',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
