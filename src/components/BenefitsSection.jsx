const benefits = [
  {
    title: "Free Shipping",
    detail: "Free delivery across India on orders above Rs. 999.",
    icon: "FS"
  },
  {
    title: "Cash On Delivery",
    detail: "COD available in most pincodes for faster checkout.",
    icon: "COD"
  },
  {
    title: "Easy Exchange",
    detail: "7-day size exchange support for unworn products.",
    icon: "EX"
  },
  {
    title: "Made For India",
    detail: "Breathable cotton tees designed for Indian weather.",
    icon: "IN"
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="benefits-section py-5">
      <div className="container">
        <div className="section-head mb-4">
          <p className="section-kicker mb-1">Why Choose Us</p>
          <h3 className="section-title mb-0">Built Like A Modern Indian Tee Brand</h3>
        </div>
        <div className="row g-3 g-md-4">
          {benefits.map((item) => (
            <div className="col-sm-6 col-lg-3" key={item.title}>
              <article className="benefit-card h-100 p-4">
                <span className="benefit-icon mb-3">{item.icon}</span>
                <h4 className="benefit-title mb-2">{item.title}</h4>
                <p className="mb-0">{item.detail}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
