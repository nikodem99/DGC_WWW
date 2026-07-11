'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Skill } from '@/types';

interface SkillCounterProps {
  skills: Skill[];
  layout?: string;
}

function AnimatedNumber({ value, started }: { value: number; started: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started) {
      setDisplay(0);
      return;
    }

    let frame: number;
    const duration = 2000;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, started]);

  return <>{display}</>;
}

export default function SkillCounter({
  skills,
  layout = 'counter',
}: SkillCounterProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      }
    },
    [],
  );

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.2,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersect]);

  if (layout === 'bar') {
    const barSkills = skills.filter((s) => s.max != null && s.max > 0);

    return (
      <div ref={wrapRef} className="sc_skills sc_skills_bar">
        {barSkills.map((skill, idx) => {
          const pct = Math.round((skill.value / (skill.max ?? 100)) * 100);
          return (
            <div key={idx} className="sc_skills_item">
              <div className="sc_skills_item_header">
                <h6 className="sc_skills_item_title">{skill.title}</h6>
                <span className="sc_skills_item_percent">{pct}%</span>
              </div>
              <div className="sc_skills_item_bar">
                <div
                  className="sc_skills_item_bar_fill"
                  style={{
                    width: started ? `${pct}%` : '0%',
                    backgroundColor: skill.color || undefined,
                    transition: 'width 2s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={wrapRef} className="sc_skills sc_skills_counter columns_wrap">
      {skills.map((skill, idx) => (
        <div key={idx} className="sc_skills_item column-1_4">
          {skill.icon && (
            <div className="sc_skills_item_icon">
              <span className={skill.icon} />
            </div>
          )}
          <div className="sc_skills_item_value">
            <AnimatedNumber value={skill.value} started={started} />
          </div>
          <h6 className="sc_skills_item_title">{skill.title}</h6>
        </div>
      ))}
    </div>
  );
}
