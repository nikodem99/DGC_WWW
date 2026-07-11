interface ContentNoneSearchProps {
  query?: string;
}

export default function ContentNoneSearch({ query }: ContentNoneSearchProps) {
  return (
    <article className="post_item_none post_item_none_search">
      <div className="post_item_none_icon">
        <span className="icon-search" />
      </div>
      <div className="post_item_none_content">
        <h2 className="post_item_none_title">Nothing found</h2>
        <p className="post_item_none_text">
          {query
            ? `Sorry, but nothing matched your search criteria "${query}". Please try again with some different keywords.`
            : 'Please enter a search term to find posts.'}
        </p>
      </div>
    </article>
  );
}
