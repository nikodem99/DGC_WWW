import { IconItem } from '@/types';

interface IconBoxProps {
  items: IconItem[];
  columns?: number;
  layout?: string;
}

export default function IconBox({
  items,
  columns = 3,
  layout = 'default',
}: IconBoxProps) {
  const columnClass = `column-1_${columns}`;

  const wrapClasses = [
    'sc_icons',
    `sc_icons_${layout}`,
    'columns_wrap',
  ].join(' ');

  return (
    <div className={wrapClasses}>
      {items.map((item, idx) => {
        const itemClasses = [
          'sc_icons_item',
          columnClass,
        ].join(' ');

        const content = (
          <div className="sc_icons_item_inner">
            <div
              className={`sc_icons_item_icon${
                layout === 'creative'
                  ? ' sc_icons_item_icon_left'
                  : ' sc_icons_item_icon_top'
              }`}
            >
              {layout === 'number' ? (
                <span className="sc_icons_item_number">
                  {item.number ?? idx + 1}
                </span>
              ) : (
                <span className={`sc_icons_item_icon_inner ${item.icon}`} />
              )}
            </div>
            <div className="sc_icons_item_content">
              <h4 className="sc_icons_item_title">{item.title}</h4>
              {item.description && (
                <div className="sc_icons_item_description">
                  {item.description}
                </div>
              )}
            </div>
          </div>
        );

        return (
          <div key={idx} className={itemClasses}>
            {item.link ? (
              <a href={item.link} className="sc_icons_item_link">
                {content}
              </a>
            ) : (
              content
            )}
          </div>
        );
      })}
    </div>
  );
}
