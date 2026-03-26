const HeroSection = () => {
  return (
    <header id="top" className="hero-section">
      <div className="container py-4 py-md-5">
        <div className="row align-items-center g-4 mt-4 mt-md-5">
          <div className="col-lg-7">
            <p className="tag-line mb-2">Unapologetic Prints. Everyday Fit.</p>
            <h1 className="hero-title mb-3">
              T-Shirts Built For Daily Wear And Loud Identity.
            </h1>
            <p className="hero-copy mb-4">
              Premium cotton, graphic-led designs, and cuts made for comfort.
              Drop-ready styles for creators, dreamers, and rule-breakers.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a href="#collection" className="btn btn-brand px-4 py-2">
                Explore Collection
              </a>
              <a href="#lookbook" className="btn btn-outline-dark px-4 py-2">
                View facebook
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-visual-wrap">
              <img
                className="hero-main-panel"
                src="/images/tshirt-real-4.png"
                alt="T-shirt product advertisement"
              />
              <div className="hero-card p-4">
                <p className="mb-1">Next Drop</p>
                <h3 className="mb-2">Urban Echo 02</h3>
                <p className="mb-0">
                  Limited run. Oversized silhouettes. Distressed print details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
