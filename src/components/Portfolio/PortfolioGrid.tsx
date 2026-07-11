import { PortfolioItem as PortfolioItemType } from '@/types';
import { cn } from '@/lib/utils';
import PortfolioItem from './PortfolioItem';
import PortfolioBand from './PortfolioBand';
import PortfolioEclipse from './PortfolioEclipse';
import PortfolioFill from './PortfolioFill';
import PortfolioSimple from './PortfolioSimple';

interface PortfolioGridProps {
  items: PortfolioItemType[];
  layout?: string;
  columns?: number;
}

export default function PortfolioGrid({
  items,
  layout = 'default',
  columns = 3,
}: PortfolioGridProps) {
  const renderItem = (item: PortfolioItemType) => {
    switch (layout) {
      case 'band':
        return <PortfolioBand key={item.id} item={item} />;
      case 'eclipse':
        return <PortfolioEclipse key={item.id} item={item} />;
      case 'fill':
        return <PortfolioFill key={item.id} item={item} />;
      case 'simple':
        return <PortfolioSimple key={item.id} item={item} />;
      case 'default':
      default:
        return <PortfolioItem key={item.id} item={item} />;
    }
  };

  const columnClass = `column-1_${columns}`;

  return (
    <div className="portfolio_wrap columns_wrap">
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            columnClass,
            `portfolio_layout_${layout}`
          )}
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
