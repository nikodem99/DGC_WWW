interface PromoBoxProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  link?: string;
  buttonText?: string;
}

export default function PromoBox({
  title,
  subtitle,
  description,
  image,
  link,
  buttonText,
}: PromoBoxProps) {
  const wrapClasses = [
    'sc_promo',
    image ? 'sc_promo_with_image' : 'sc_promo_no_image',
  ].join(' ');

  return (
    <div className={wrapClasses}>
      <div className="sc_promo_inner">
        {image && (
          <div className="sc_promo_image">
            <img src={image} alt={title} />
          </div>
        )}
        <div className="sc_promo_content">
          {subtitle && (
            <span className="sc_promo_subtitle">{subtitle}</span>
          )}
          <h2 className="sc_promo_title">{title}</h2>
          <div className="sc_promo_description">{description}</div>
          {link && buttonText && (
            <a href={link} className="sc_promo_link sc_button">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
