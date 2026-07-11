export function SkipLinks() {
  return (
    <>
      <a className="skip-link gross_skip_link skip_to_content_link" href="#content_skip_link_anchor">
        Skip to content
      </a>
      <a className="skip-link gross_skip_link skip_to_sidebar_link" href="#sidebar_skip_link_anchor">
        Skip to sidebar
      </a>
      <a className="skip-link gross_skip_link skip_to_footer_link" href="#footer_skip_link_anchor">
        Skip to footer
      </a>
    </>
  );
}

export default SkipLinks;
