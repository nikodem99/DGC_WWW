import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { demoTeam } from '@/config/site';

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function generateStaticParams() {
  return demoTeam.map((member) => ({
    slug: slugify(member.name),
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const member = demoTeam.find((m) => slugify(m.name) === slug);
    return {
      title: member?.name || 'Team Member Not Found',
    };
  });
}

export default async function SingleTeamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = demoTeam.find((m) => slugify(m.name) === slug);

  if (!member) {
    notFound();
  }

  return (
    <>
      <Header
        title={member.name}
        showTitle
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Team', href: '/team' },
          { label: member.name },
        ]}
      />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <span id="content_skip_link_anchor" className="gross_skip_link_anchor" />
            <article className="post_item_single post_item_team">
              <div className="post_header entry-header">
                <div className="sc_team_item_avatar sc_team_item_avatar_single">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={570}
                    height={570}
                    className="sc_team_item_avatar_img"
                    priority
                  />
                </div>
                <h1 className="post_title entry-title">{member.name}</h1>
                <div className="sc_team_item_subtitle">{member.position}</div>
              </div>

              {member.bio && (
                <div className="post_content entry-content">
                  <div className="post_content_inner">
                    <p>{member.bio}</p>
                  </div>
                </div>
              )}

              {member.socials && member.socials.length > 0 && (
                <div className="sc_team_item_socials sc_team_item_socials_single">
                  <h3 className="sc_team_item_socials_title">Connect</h3>
                  <div className="sc_team_item_socials_list">
                    {member.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="social_item"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.name}
                      >
                        <span className={`social_icon ${social.icon}`} />
                        <span className="social_name">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
      <span id="footer_skip_link_anchor" className="gross_skip_link_anchor" />
      <Footer />
    </>
  );
}
