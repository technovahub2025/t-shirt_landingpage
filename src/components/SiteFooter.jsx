const SiteFooter = () => {
  return (
    <footer className="site-footer py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <p className="mb-0">&copy; 2026 THREADVAULT</p>
        <div className="d-flex gap-3">
          <a href="#lookbook" className="footer-link">
            Instagram
          </a>
          <a href="#styles" className="footer-link">
            facebook
          </a>
          <a href="#faq" className="footer-link">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
