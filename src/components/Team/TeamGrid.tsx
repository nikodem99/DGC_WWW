import { TeamMember } from '@/types';
import TeamDefault from './TeamDefault';
import TeamFeatured from './TeamFeatured';
import TeamHover from './TeamHover';
import TeamShort from './TeamShort';
import TeamPanel from './TeamPanel';
import TeamCircle from './TeamCircle';
import TeamModern from './TeamModern';
import TeamClassic from './TeamClassic';
import TeamSimple from './TeamSimple';
import TeamExtra from './TeamExtra';
import TeamInfo from './TeamInfo';
import TeamAccent from './TeamAccent';

interface TeamGridProps {
  members: TeamMember[];
  layout?: string;
  columns?: number;
}

export default function TeamGrid({
  members,
  layout = 'default',
  columns = 4,
}: TeamGridProps) {
  const renderMember = (member: TeamMember) => {
    switch (layout) {
      case 'featured':
        return <TeamFeatured key={member.name} member={member} />;
      case 'hover':
        return <TeamHover key={member.name} member={member} />;
      case 'short':
        return <TeamShort key={member.name} member={member} />;
      case 'panel':
        return <TeamPanel key={member.name} member={member} />;
      case 'circle':
        return <TeamCircle key={member.name} member={member} />;
      case 'modern':
        return <TeamModern key={member.name} member={member} />;
      case 'classic':
        return <TeamClassic key={member.name} member={member} />;
      case 'simple':
        return <TeamSimple key={member.name} member={member} />;
      case 'extra':
        return <TeamExtra key={member.name} member={member} />;
      case 'info':
        return <TeamInfo key={member.name} member={member} />;
      case 'accent':
        return <TeamAccent key={member.name} member={member} />;
      case 'default':
      default:
        return <TeamDefault key={member.name} member={member} />;
    }
  };

  return (
    <div className="sc_team sc_team_default">
      <div className={`columns_wrap sc_item_columns sc_item_columns_${columns}`}>
        {members.map(renderMember)}
      </div>
    </div>
  );
}
