const imageBase = `${import.meta.env.BASE_URL}images/`;

const looks = [
  {
    title: "Graphic Street Fit",
    image: `${imageBase}tshirt-real-1.png`
  },
  {
    title: "Mono Everyday Tee",
    image: `${imageBase}tshirt-real-2.png`
  },
  {
    title: "Oversized Drop",
    image: `${imageBase}tshirt-real-3.png`
  },
  {
    title: "Urban Print Capsule",
    image: `${imageBase}tshirt-real-4.png`
  }
];

const LookbookSection = () => {
  return (
    <section id="lookbook" className="lookbook-section py-5">
      <div className="container">
        <div className="section-head mb-4">
          <p className="section-kicker mb-1">Lookbook</p>
          <h3 className="section-title mb-0">How The Drop Lands In Real Streets</h3>
        </div>
        <div className="row g-3 g-lg-4">
          {looks.map((look, index) => (
            <div className="col-sm-6 col-lg-3" key={look.title}>
              <article className="lookbook-card">
                <img src={look.image} className="lookbook-image" alt={`${look.title} t-shirt look`} />
                <div className="lookbook-overlay p-3">
                  <span className="lookbook-index">0{index + 1}</span>
                  <h4 className="mb-0">{look.title}</h4>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;



