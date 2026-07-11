import Image from 'next/image';
import Link from 'next/link';
import { TeamMember } from '@/types';

interface TeamFeaturedProps {
  member: TeamMember;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function TeamFeatured({ member }: TeamFeaturedProps) {
  return (
    <div className="sc_team_item sc_team_item_featured">
      <div className="sc_team_item_avatar">
        <Link href={`/team/${slugify(member.name)}`}>
          <Image
            src={member.avatar}
            alt={member.name}
            width={570}
            height={570}
            className="sc_team_item_avatar_img"
          />
        </Link>
      </div>
      <div className="sc_team_item_info">
        <h4 className="sc_team_item_title">
          <Link href={`/team/${slugify(member.name)}`}>{member.name}</Link>
        </h4>
        <div className="sc_team_item_subtitle">{member.position}</div>
        {member.bio && (
          <div className="sc_team_item_text">
            <p>{member.bio}</p>
          </div>
        )}
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
