import Image from 'next/image';
import Link from 'next/link';
import { TeamMember } from '@/types';

interface TeamShortProps {
  member: TeamMember;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function TeamShort({ member }: TeamShortProps) {
  return (
    <div className="sc_team_item sc_team_item_short">
      <div className="sc_team_item_avatar">
        <Link href={`/team/${slugify(member.name)}`}>
          <Image
            src={member.avatar}
            alt={member.name}
            width={80}
            height={80}
            className="sc_team_item_avatar_img"
          />
        </Link>
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
