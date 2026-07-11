import Link from 'next/link';
import { siteConfig, demoContacts } from '@/config/site';
import { getColumnClass } from '@/lib/utils';

export default function FooterWidgets() {
  const { footerWidgets, footerColumns, navigation } = siteConfig;

  if (!footerWidgets || footerWidgets.length === 0) {
    return null;
  }

  return (
    <div className="footer_widgets_wrap widget_area sc_layouts_row sc_layouts_row_type_normal">
      <div className="footer_widgets_inner widget_area_inner">
        <div className="content_wrap">
          <div className="columns_wrap">
            {footerWidgets.map((widget, index) => (
              <aside
                key={index}
                className={`widget ${getColumnClass(index + 1, footerColumns)}`}
              >
                <h5 className="widget_title">{widget.title}</h5>
                <div className="widget_text">
                  {widget.title === 'Quick Links' ? (
                    <ul className="widget_list">
                      {navigation.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : widget.title === 'Contact Info' ? (
                    <ul className="widget_contacts">
                      {demoContacts.map((contact, i) => (
                        <li key={i} className="widget_contacts_item">
                          <span className={contact.icon} />
                          {contact.url ? (
                            <a href={contact.url}>{contact.value}</a>
                          ) : (
                            <span>{contact.value}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : widget.content ? (
                    <p>{widget.content}</p>
                  ) : null}
                </div>
              </aside>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
