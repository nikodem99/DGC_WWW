import { PricingPlan } from '@/types';

interface PricingTableProps {
  plans: PricingPlan[];
  columns?: number;
  layout?: string;
}

export default function PricingTable({
  plans,
  columns = 3,
  layout = 'default',
}: PricingTableProps) {
  const columnClass = `column-1_${columns}`;

  const wrapClasses = [
    'sc_price',
    `sc_price_${layout}`,
    'columns_wrap',
  ].join(' ');

  return (
    <div className={wrapClasses}>
      {plans.map((plan) => {
        const itemClasses = [
          'sc_price_item',
          columnClass,
          plan.highlighted ? 'sc_price_item_highlighted' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <div key={plan.id} className={itemClasses}>
            {plan.label && (
              <div className="sc_price_item_label">
                <span className="sc_price_item_label_text">{plan.label}</span>
              </div>
            )}
            <div className="sc_price_item_inner">
              <div className="sc_price_item_header">
                <h3 className="sc_price_item_title">{plan.title}</h3>
                {plan.subtitle && (
                  <div className="sc_price_item_subtitle">{plan.subtitle}</div>
                )}
              </div>
              <div className="sc_price_item_price_wrap">
                <div className="sc_price_item_price">
                  {plan.currency && (
                    <span className="sc_price_item_price_currency">
                      {plan.currency}
                    </span>
                  )}
                  <span className="sc_price_item_price_value">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="sc_price_item_price_period">
                      /{plan.period}
                    </span>
                  )}
                </div>
              </div>
              <ul className="sc_price_item_details">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`sc_price_item_details_item${
                      feature.included
                        ? ' sc_price_item_details_item_included'
                        : ' sc_price_item_details_item_excluded'
                    }`}
                  >
                    <span
                      className={`sc_price_item_details_icon ${
                        feature.included ? 'icon-ok' : 'icon-cancel'
                      }`}
                    />
                    <span className="sc_price_item_details_text">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="sc_price_item_footer">
                <a
                  href={plan.buttonUrl}
                  className="sc_price_item_link sc_button"
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
