import { Service } from '@/types';
import ServiceDefault from './ServiceDefault';
import ServiceClassic from './ServiceClassic';
import ServiceModern from './ServiceModern';
import ServiceHover from './ServiceHover';
import ServiceMinimal from './ServiceMinimal';
import ServicePrice from './ServicePrice';
import ServiceCreative from './ServiceCreative';
import ServiceAccent from './ServiceAccent';
import ServiceExtra from './ServiceExtra';
import ServicePanel from './ServicePanel';
import ServiceCallouts from './ServiceCallouts';
import ServiceLight from './ServiceLight';
import ServiceIcons from './ServiceIcons';

interface ServicesGridProps {
  services: Service[];
  layout?: string;
  columns?: number;
}

export default function ServicesGrid({
  services,
  layout = 'default',
  columns = 3,
}: ServicesGridProps) {
  const renderService = (service: Service, index: number) => {
    switch (layout) {
      case 'classic':
        return <ServiceClassic key={service.id} service={service} />;
      case 'modern':
        return <ServiceModern key={service.id} service={service} />;
      case 'hover':
        return <ServiceHover key={service.id} service={service} />;
      case 'minimal':
        return <ServiceMinimal key={service.id} service={service} />;
      case 'price':
        return <ServicePrice key={service.id} service={service} />;
      case 'creative':
        return <ServiceCreative key={service.id} service={service} />;
      case 'accent':
        return <ServiceAccent key={service.id} service={service} />;
      case 'extra':
        return <ServiceExtra key={service.id} service={service} />;
      case 'panel':
        return <ServicePanel key={service.id} service={service} />;
      case 'callouts':
        return <ServiceCallouts key={service.id} service={service} index={index} />;
      case 'light':
        return <ServiceLight key={service.id} service={service} />;
      case 'icons':
        return <ServiceIcons key={service.id} service={service} />;
      case 'default':
      default:
        return <ServiceDefault key={service.id} service={service} />;
    }
  };

  return (
    <div className="sc_services sc_services_default">
      <div className={`sc_services_columns_wrap sc_item_columns sc_item_columns_${columns}`}>
        {services.map((service, index) => renderService(service, index))}
      </div>
    </div>
  );
}
