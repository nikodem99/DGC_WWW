import { siteConfig } from '@/config/site';
import { replaceCopyrightMacros } from '@/lib/utils';

export default function FooterCopyright() {
  const copyrightText = replaceCopyrightMacros(siteConfig.copyright);

  return (
    <div className="footer_copyright_wrap">
      <div className="footer_copyright_inner">
        <div className="content_wrap">
          <div
            className="copyright_text"
            dangerouslySetInnerHTML={{ __html: copyrightText }}
          />
        </div>
      </div>
    </div>
  );
}
