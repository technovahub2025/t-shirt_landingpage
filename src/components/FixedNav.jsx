const navItems = [
  { label: "Collection", href: "#collection" },
  { label: "Styles", href: "#styles" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Products", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" }
];

const FixedNav = () => {
  return (
    <header className="fixed-nav-shell">
      <div className="container">
        <nav className="top-nav fixed-nav d-flex justify-content-between align-items-center gap-3">
          <a href="#top" className="brand-anchor d-flex align-items-center gap-2 text-decoration-none">
            <span className="brand-logo brand-logo-badge" aria-hidden="true">
              TV
            </span>
            <strong className="brand-compact-name">THREADVAULT</strong>
          </a>
          <ul className="nav-links mb-0">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a href="#products" className="btn btn-brand btn-sm px-3 fw-semibold nav-cta">
            Shop Drop
          </a>
        </nav>
      </div>
    </header>
  );
};

export default FixedNav;
