import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderTitleProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function HeaderTitle({ title, breadcrumbs }: HeaderTitleProps) {
  return (
    <div className="top_panel_title">
      <div className="content_wrap">
        <div className="sc_layouts_title">
          <div className="sc_layouts_title_content">
            <h1 className="sc_layouts_title_caption">{title}</h1>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="breadcrumbs">
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <span key={index} className="breadcrumbs_item">
                      {index > 0 && (
                        <span className="breadcrumbs_delimiter"> / </span>
                      )}
                      {crumb.href && !isLast ? (
                        <Link href={crumb.href} className="breadcrumbs_link">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="breadcrumbs_current">{crumb.label}</span>
                      )}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
