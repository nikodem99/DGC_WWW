import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TeamGrid from '@/components/Team/TeamGrid';
import { demoTeam } from '@/config/site';

export const metadata = {
  title: 'Team',
};

export default function TeamPage() {
  return (
    <>
      <Header
        title="Team"
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Team' },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <TeamGrid
              members={demoTeam}
              layout="default"
              columns={4}
            />
          </div>
        </div>
      </div>
      <span id="footer_skip_link_anchor" className="gross_skip_link_anchor" />
      <Footer />
    </>
  );
}
