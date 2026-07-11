'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TeamMember } from '@/types';

interface TeamCircleProps {
  member: TeamMember;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function TeamCircle({ member }: TeamCircleProps) {
  return (
    <div className="sc_team_item sc_team_item_circle">
      <div className="sc_team_item_avatar">
        <Link href={`/team/${slugify(member.name)}`}>
          <Image
            src={member.avatar}
            alt={member.name}
            width={300}
            height={300}
            className="sc_team_item_avatar_img"
          />
        </Link>
        {member.socials && member.socials.length > 0 && (
          <div className="sc_team_item_overlay">
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
          </div>
        )}
      </div>
      <div className="sc_team_item_info">
        <h6 className="sc_team_item_title">
          <Link href={`/team/${slugify(member.name)}`}>{member.name}</Link>
        </h6>
        <div className="sc_team_item_subtitle">{member.position}</div>
      </div>
    </div>
  );
}
