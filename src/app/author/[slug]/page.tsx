import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BlogArchive from '@/components/Blog/BlogArchive';
import Sidebar from '@/components/Sidebar/Sidebar';
import { siteConfig, demoPosts } from '@/config/site';
import { PostAuthor } from '@/types';

function slugifyAuthor(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

function getAllAuthors(): (PostAuthor & { slug: string })[] {
  const authorMap = new Map<string, PostAuthor & { slug: string }>();
  demoPosts.forEach((post) => {
    const slug = slugifyAuthor(post.author.name);
    if (!authorMap.has(slug)) {
      authorMap.set(slug, { ...post.author, slug });
    }
  });
  return Array.from(authorMap.values());
}

export function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const authors = getAllAuthors();
    const author = authors.find((a) => a.slug === slug);
    return {
      title: author?.name || 'Author Not Found',
    };
  });
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const authors = getAllAuthors();
  const author = authors.find((a) => a.slug === slug);

  if (!author) {
    notFound();
  }

  const posts = demoPosts.filter(
    (post) => slugifyAuthor(post.author.name) === slug
  );

  return (
    <>
      <Header
        title={author.name}
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Author' },
          { label: author.name },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <div className="author_page author_info">
              <div className="author_avatar">
                {author.avatar && (
                  <img src={author.avatar} alt={author.name} />
                )}
              </div>
              <div className="author_description">
                <h4 className="author_title">{author.name}</h4>
                {author.bio && (
                  <div className="author_bio">
                    <p>{author.bio}</p>
                  </div>
                )}
                {author.url && (
                  <a
                    href={author.url}
                    className="author_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
            <BlogArchive
              posts={posts}
              blogStyle={siteConfig.blogStyle}
              currentPage={1}
              totalPages={1}
            />
          </div>
          {siteConfig.showSidebar && (
            <Sidebar position={siteConfig.sidebarPosition as 'left' | 'right'} />
          )}
        </div>
      </div>
      <span id="footer_skip_link_anchor" className="gross_skip_link_anchor" />
      <Footer />
    </>
  );
}
