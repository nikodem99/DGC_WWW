import Link from 'next/link';
import { FrontPageSection, Post } from '@/types';
import { demoPosts } from '@/config/site';
import { hexToRgba } from './SectionTitle';

interface SectionBlogProps {
  section: FrontPageSection;
  posts?: Post[];
}

export function SectionBlog({
  section,
  posts = demoPosts,
}: SectionBlogProps) {
  const outerClasses = [
    'front_page_section',
    'front_page_section_blog',
    section.scheme ? `scheme_${section.scheme}` : '',
    section.paddings ? `front_page_section_paddings_${section.paddings}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  const outerStyle: React.CSSProperties = {};
  if (section.bgImage) {
    outerStyle.backgroundImage = `url(${section.bgImage})`;
  }

  const innerStyle: React.CSSProperties = {};
  if (section.bgColor && section.bgMask != null && section.bgMask > 0) {
    innerStyle.backgroundColor =
      section.bgMask < 1
        ? hexToRgba(section.bgColor, section.bgMask)
        : section.bgColor;
  }

  return (
    <div className={outerClasses} style={outerStyle}>
      <div
        className="front_page_section_inner front_page_section_blog_inner"
        style={innerStyle}
      >
        <div className="front_page_section_content_wrap front_page_section_blog_content_wrap content_wrap">
          {section.caption && (
            <h2 className="front_page_section_caption front_page_section_blog_caption">
              {section.caption}
            </h2>
          )}
          {section.description && (
            <div className="front_page_section_description front_page_section_blog_description">
              {section.description}
            </div>
          )}
          <div className="sc_blogger columns_wrap">
            {posts.map((post) => (
              <div key={post.id} className="column-1_3">
                {post.featuredImage && (
                  <div className="post_featured">
                    <Link href={`/blog/${post.slug}`}>
                      <img src={post.featuredImage} alt={post.title} />
                    </Link>
                  </div>
                )}
                <h5 className="post_title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h5>
                <div className="post_meta">{post.date}</div>
                <div className="post_excerpt">{post.excerpt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
