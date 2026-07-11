import { notFound } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SinglePost from '@/components/Single/SinglePost';
import Comments from '@/components/Comments/Comments';
import Sidebar from '@/components/Sidebar/Sidebar';
import { siteConfig, demoPosts, demoComments } from '@/config/site';

export function generateStaticParams() {
  return demoPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const post = demoPosts.find((p) => p.slug === slug);
    return {
      title: post?.title || 'Post Not Found',
    };
  });
}

export default async function SinglePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postIndex = demoPosts.findIndex((p) => p.slug === slug);
  const post = demoPosts[postIndex];

  if (!post) {
    notFound();
  }

  const prevPost = postIndex > 0 ? demoPosts[postIndex - 1] : undefined;
  const nextPost = postIndex < demoPosts.length - 1 ? demoPosts[postIndex + 1] : undefined;
  const relatedPosts = demoPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Header
        title={post.title}
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <SinglePost
              post={post}
              relatedPosts={relatedPosts}
              prevPost={prevPost ? { title: prevPost.title, slug: prevPost.slug } : undefined}
              nextPost={nextPost ? { title: nextPost.title, slug: nextPost.slug } : undefined}
            />
            <Comments
              comments={demoComments}
              commentsOpen={true}
              count={post.commentsCount}
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
