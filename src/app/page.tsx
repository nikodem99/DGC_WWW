import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { SectionTitle } from '@/components/FrontPage/SectionTitle';
import { SectionAbout } from '@/components/FrontPage/SectionAbout';
import { SectionFeatures } from '@/components/FrontPage/SectionFeatures';
import { SectionTeam } from '@/components/FrontPage/SectionTeam';
import { SectionTestimonials } from '@/components/FrontPage/SectionTestimonials';
import { SectionBlog } from '@/components/FrontPage/SectionBlog';
import { SectionContacts } from '@/components/FrontPage/SectionContacts';
import { SectionSubscribe } from '@/components/FrontPage/SectionSubscribe';
import { SectionGoogleMap } from '@/components/FrontPage/SectionGoogleMap';
import { SectionWooCommerce } from '@/components/FrontPage/SectionWooCommerce';
import {
  frontPageSections,
  demoFeatures,
  demoTeam,
  demoTestimonials,
  demoPosts,
  demoContacts,
  demoProducts,
} from '@/config/site';

export default function HomePage() {
  const sectionMap: Record<string, React.ReactNode> = {};

  for (const section of frontPageSections) {
    if (!section.enabled) continue;

    switch (section.type) {
      case 'title':
        sectionMap[section.id] = <SectionTitle key={section.id} section={section} />;
        break;
      case 'about':
        sectionMap[section.id] = <SectionAbout key={section.id} section={section} />;
        break;
      case 'features':
        sectionMap[section.id] = (
          <SectionFeatures key={section.id} section={section} features={demoFeatures} />
        );
        break;
      case 'team':
        sectionMap[section.id] = (
          <SectionTeam key={section.id} section={section} members={demoTeam} />
        );
        break;
      case 'testimonials':
        sectionMap[section.id] = (
          <SectionTestimonials key={section.id} section={section} testimonials={demoTestimonials} />
        );
        break;
      case 'blog':
        sectionMap[section.id] = (
          <SectionBlog key={section.id} section={section} posts={demoPosts} />
        );
        break;
      case 'contacts':
        sectionMap[section.id] = (
          <SectionContacts key={section.id} section={section} contacts={demoContacts} />
        );
        break;
      case 'subscribe':
        sectionMap[section.id] = <SectionSubscribe key={section.id} section={section} />;
        break;
      case 'googlemap':
        sectionMap[section.id] = <SectionGoogleMap key={section.id} section={section} />;
        break;
      case 'woocommerce':
        sectionMap[section.id] = (
          <SectionWooCommerce key={section.id} section={section} products={demoProducts} />
        );
        break;
    }
  }

  return (
    <>
      <Header />
      <div className="page_content_wrap">
        {frontPageSections
          .filter((s) => s.enabled)
          .map((s) => sectionMap[s.id])}
      </div>
      <span id="footer_skip_link_anchor" className="gross_skip_link_anchor" />
      <Footer />
    </>
  );
}
