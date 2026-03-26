const testimonials = [
  {
    name: "Aman Patel",
    role: "Designer",
    text: "Fit is exactly right and print quality stays sharp even after repeated wash."
  },
  {
    name: "Nina Roy",
    role: "Content Creator",
    text: "The oversized silhouette and fabric feel premium. I style these every week."
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="testimonials-section py-5">
      <div className="container">
        <div className="section-head mb-4">
          <p className="section-kicker mb-1">Community</p>
          <h3 className="section-title mb-0">What People Say</h3>
        </div>
        <div className="row g-4">
          {testimonials.map((item) => (
            <div className="col-md-6" key={item.name}>
              <article className="testimonial-card h-100 p-4">
                <p className="mb-3">{item.text}</p>
                <div className="d-flex align-items-center gap-3">
                  <span className="testimonial-avatar" aria-hidden="true">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div>
                    <p className="mb-0 fw-bold">{item.name}</p>
                    <p className="mb-0 small text-secondary">{item.role}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
