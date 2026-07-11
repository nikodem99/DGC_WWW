import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="breadcrumbs">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className="breadcrumbs_delimiter"> / </span>}
          {item.href ? (
            <Link href={item.href} className="breadcrumbs_item">
              {item.label}
            </Link>
          ) : (
            <span className="breadcrumbs_item current">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
