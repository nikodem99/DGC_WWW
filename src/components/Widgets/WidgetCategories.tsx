import Link from 'next/link';

interface WidgetCategoriesProps {
  categories: { name: string; slug: string; count: number }[];
}

export default function WidgetCategories({ categories }: WidgetCategoriesProps) {
  return (
    <aside className="widget widget_categories">
      <h5 className="widget_title">Categories</h5>
      <ul className="widget_categories_list">
        {categories.map((category) => (
          <li key={category.slug} className="widget_categories_item">
            <Link href={`/category/${category.slug}`} className="widget_categories_item_link">
              {category.name}
              <span className="widget_categories_item_count">({category.count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
