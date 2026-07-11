import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import { siteConfig } from '@/config/site';

const demoPages: Record<string, { title: string; content: string }> = {
  about: {
    title: 'About Us',
    content: `
      <p>Welcome to DGC - Digital Gross Company. We are a team of passionate professionals dedicated to delivering exceptional digital experiences.</p>
      <h3>Our Mission</h3>
      <p>Our mission is to help businesses transform their online presence and achieve their goals through innovative digital solutions.</p>
      <h3>Our Vision</h3>
      <p>We envision a world where every business has access to world-class digital tools and strategies that drive growth and success.</p>
      <h3>Our Values</h3>
      <ul>
        <li>Innovation - We constantly push the boundaries of what's possible</li>
        <li>Quality - We deliver nothing but the best</li>
        <li>Integrity - We build trust through transparency</li>
        <li>Collaboration - We work together to achieve great things</li>
      </ul>
    `,
  },
  services: {
    title: 'Our Services',
    content: `
      <p>We offer a comprehensive range of digital services designed to help your business thrive in the modern marketplace.</p>
      <h3>Web Development</h3>
      <p>Custom websites and web applications built with the latest technologies.</p>
      <h3>Mobile Applications</h3>
      <p>Native and cross-platform mobile apps that deliver seamless user experiences.</p>
      <h3>Digital Marketing</h3>
      <p>Data-driven marketing strategies that deliver measurable results.</p>
      <h3>UI/UX Design</h3>
      <p>Beautiful, intuitive designs that engage and convert users.</p>
    `,
  },
  contact: {
    title: 'Contact Us',
    content: `
      <p>We'd love to hear from you. Get in touch with our team today.</p>
      <h3>Our Office</h3>
      <p>123 Business Street, City, Country</p>
      <h3>Phone</h3>
      <p>+1 (555) 123-4567</p>
      <h3>Email</h3>
      <p>info@dgc.com</p>
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(demoPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const page = demoPages[slug];
    return {
      title: page?.title || 'Page',
    };
  });
}

export default async function StaticPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = demoPages[slug];

  if (!page) {
    return null;
  }

  return (
    <>
      <Header
        title={page.title}
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: page.title },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <article className="post_item_single post_type_page">
              <div className="post_content entry-content">
                <div dangerouslySetInnerHTML={{ __html: page.content }} />
              </div>
            </article>
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
