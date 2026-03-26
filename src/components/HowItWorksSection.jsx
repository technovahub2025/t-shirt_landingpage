const steps = [
  {
    stage: "01",
    title: "Choose The Drop",
    text: "Browse trend-led graphics or clean essentials and shortlist your perfect fit."
  },
  {
    stage: "02",
    title: "Personalize Fast",
    text: "Pick size, color, and add custom back-print tags in seconds."
  },
  {
    stage: "03",
    title: "Wear It First",
    text: "We pack and dispatch quickly so your next favorite tee reaches you in record time."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="process" className="process-section py-5">
      <div className="container">
        <div className="section-head mb-4">
          <p className="section-kicker mb-1">How It Works</p>
          <h3 className="section-title mb-0">From Cart To Closet In 3 Moves</h3>
        </div>
        <div className="row g-3 g-lg-4">
          {steps.map((item) => (
            <div className="col-md-4" key={item.stage}>
              <article className="process-card h-100 p-4">
                <p className="process-stage mb-2">{item.stage}</p>
                <h4 className="process-title mb-2">{item.title}</h4>
                <p className="mb-0">{item.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
