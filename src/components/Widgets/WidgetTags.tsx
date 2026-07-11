import Link from 'next/link';

interface WidgetTagsProps {
  tags: { name: string; slug: string }[];
}

export default function WidgetTags({ tags }: WidgetTagsProps) {
  return (
    <aside className="widget widget_tag_cloud">
      <h5 className="widget_title">Tags</h5>
      <div className="tagcloud">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={`/tag/${tag.slug}`}
            className="tag-cloud-link"
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
