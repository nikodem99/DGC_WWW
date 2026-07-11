import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function NotFound() {
  return (
    <>
      <Header title="Page Not Found" />
      <div className="page_content_wrap">
        <div className="content_wrap">
          <div className="content">
            <article className="post_item_single post_item_404">
              <div className="post_content">
                <h1 className="page_title">404</h1>
                <div className="page_info">
                  <h2 className="page_subtitle">Page Not Found</h2>
                  <p className="page_description">
                    We&apos;re sorry, but<br />something went wrong.
                  </p>
                  <Link href="/" className="go_home theme_button color_style_link2">
                    Homepage
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <span id="footer_skip_link_anchor" className="gross_skip_link_anchor" />
      <Footer />
    </>
  );
}
