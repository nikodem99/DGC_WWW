interface ActionBoxProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image?: string;
  bgColor?: string;
  scheme?: string;
}

export default function ActionBox({
  title,
  description,
  buttonText,
  buttonUrl,
  image,
  bgColor,
  scheme,
}: ActionBoxProps) {
  const wrapClasses = [
    'sc_action',
    scheme ? `scheme_${scheme}` : '',
    image ? 'sc_action_with_image' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const outerStyle: React.CSSProperties = {};
  if (image) {
    outerStyle.backgroundImage = `url(${image})`;
  }
  if (bgColor) {
    outerStyle.backgroundColor = bgColor;
  }

  return (
    <div className={wrapClasses} style={outerStyle}>
      <div className="sc_action_inner">
        <div className="sc_action_content">
          <h2 className="sc_action_title">{title}</h2>
          <div className="sc_action_description">{description}</div>
          <a href={buttonUrl} className="sc_action_button sc_button">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
