const NewsletterSection = () => {
  return (
    <section className="newsletter-section py-5">
      <div className="container">
        <div className="newsletter-wrap p-4 p-md-5">
          <div className="row align-items-center g-3">
            <div className="col-lg-6">
              <p className="section-kicker mb-1 text-white">Join The Drop List</p>
              <h3 className="section-title text-white mb-0">Get Early Access To New Collections</h3>
            </div>
            <div className="col-lg-6">
              <form className="d-flex flex-column flex-sm-row gap-2">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                />
                <button className="btn btn-light btn-lg px-4 fw-semibold" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
