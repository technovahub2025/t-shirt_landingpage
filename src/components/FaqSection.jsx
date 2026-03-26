const faqData = [
  {
    q: "How do I choose the right size?",
    a: "Use the size guide to compare chest and length in inches. If you like relaxed fits, size up by one."
  },
  {
    q: "Are these t-shirts pre-shrunk?",
    a: "Yes. Our core cotton range is pre-shrunk and bio-washed, so fit remains consistent after regular washes."
  },
  {
    q: "How long does shipping take?",
    a: "Most metro orders are delivered in 2-4 business days. Remote locations may take 5-7 business days."
  },
  {
    q: "Do you offer exchanges?",
    a: "Absolutely. You can request a size exchange within 7 days from delivery as long as the item is unworn."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="faq-section py-5">
      <div className="container">
        <div className="section-head mb-4">
          <p className="section-kicker mb-1">Questions</p>
          <h3 className="section-title mb-0">Everything You Need Before Checkout</h3>
        </div>
        <div className="faq-grid">
          {faqData.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p className="mb-0">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
