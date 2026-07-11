import Link from 'next/link';
import { TeamMember } from '@/types';

interface TeamSimpleProps {
  member: TeamMember;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function TeamSimple({ member }: TeamSimpleProps) {
  return (
    <div className="sc_team_item sc_team_item_simple">
      <div className="sc_team_item_info">
        <h4 className="sc_team_item_title">
          <Link href={`/team/${slugify(member.name)}`}>{member.name}</Link>
        </h4>
        <div className="sc_team_item_subtitle">{member.position}</div>
        <div className="sc_team_item_divider" />
        {member.socials && member.socials.length > 0 && (
          <div className="sc_team_item_socials">
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
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
