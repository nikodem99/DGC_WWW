import FooterWidgets from './FooterWidgets';
import FooterLogo from './FooterLogo';
import FooterSocials from './FooterSocials';
import FooterCopyright from './FooterCopyright';

export default function Footer() {
  return (
    <footer className="footer_wrap footer_default">
      <FooterWidgets />
      <FooterLogo />
      <FooterSocials />
      <FooterCopyright />
    </footer>
  );
}
