'use client';

import { useState } from 'react';

interface SwitcherTab {
  title: string;
  content: string;
}

interface SwitcherProps {
  tabs: SwitcherTab[];
}

export default function Switcher({ tabs }: SwitcherProps) {
  const [active, setActive] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="sc_switcher">
      <div className="sc_switcher_tabs" role="tablist">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={active === idx}
            className={`sc_switcher_tab${
              active === idx ? ' sc_switcher_tab_active' : ''
            }`}
            onClick={() => setActive(idx)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="sc_switcher_panels">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            role="tabpanel"
            className={`sc_switcher_panel${
              active === idx ? ' sc_switcher_panel_active' : ''
            }`}
            style={{ display: active === idx ? 'block' : 'none' }}
            dangerouslySetInnerHTML={{ __html: tab.content }}
          />
        ))}
      </div>
    </div>
  );
}
