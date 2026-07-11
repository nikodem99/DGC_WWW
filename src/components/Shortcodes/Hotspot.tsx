'use client';

import { useState } from 'react';

interface Spot {
  x: number;
  y: number;
  title: string;
  content: string;
}

interface HotspotProps {
  image: string;
  spots: Spot[];
}

export default function Hotspot({ image, spots }: HotspotProps) {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  function toggle(idx: number) {
    setActiveSpot((prev) => (prev === idx ? null : idx));
  }

  return (
    <div className="sc_hotspot" style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={image}
        alt=""
        className="sc_hotspot_image"
        style={{ display: 'block', width: '100%', height: 'auto' }}
      />
      {spots.map((spot, idx) => {
        const isActive = activeSpot === idx;
        return (
          <div
            key={idx}
            className={`sc_hotspot_spot${isActive ? ' sc_hotspot_spot_active' : ''}`}
            style={{
              position: 'absolute',
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: isActive ? 10 : 1,
            }}
          >
            <button
              className="sc_hotspot_dot"
              onClick={() => toggle(idx)}
              onMouseEnter={() => setActiveSpot(idx)}
              onMouseLeave={() => setActiveSpot(null)}
              aria-label={spot.title}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: '3px solid #fff',
                backgroundColor: 'var(--theme-color, #E1A13A)',
                cursor: 'pointer',
                boxShadow: '0 0 6px rgba(0,0,0,0.3)',
                padding: 0,
              }}
            />
            {isActive && (
              <div
                className="sc_hotspot_tooltip"
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginBottom: '12px',
                  minWidth: '200px',
                  backgroundColor: '#fff',
                  color: '#333',
                  borderRadius: '4px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  padding: '12px 16px',
                  pointerEvents: 'none',
                }}
              >
                <h6 className="sc_hotspot_tooltip_title" style={{ margin: '0 0 4px' }}>
                  {spot.title}
                </h6>
                <div className="sc_hotspot_tooltip_content" style={{ margin: 0 }}>
                  {spot.content}
                </div>
                <div
                  className="sc_hotspot_tooltip_arrow"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    marginLeft: '-6px',
                    width: 0,
                    height: 0,
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: '6px solid #fff',
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
