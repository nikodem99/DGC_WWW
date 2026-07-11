import { ContactInfo } from '@/types';

interface WidgetContactsProps {
  contacts: ContactInfo[];
}

export default function WidgetContacts({ contacts }: WidgetContactsProps) {
  return (
    <aside className="widget widget_contacts">
      <h5 className="widget_title">Contact Info</h5>
      <ul className="widget_contacts_list">
        {contacts.map((contact) => (
          <li key={contact.label} className="widget_contacts_item">
            <span className={`widget_contacts_item_icon ${contact.icon}`} />
            <span className="widget_contacts_item_label">{contact.label}:</span>
            {contact.url ? (
              <a href={contact.url} className="widget_contacts_item_value">
                {contact.value}
              </a>
            ) : (
              <span className="widget_contacts_item_value">{contact.value}</span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
