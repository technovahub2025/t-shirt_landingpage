const imageBase = `${import.meta.env.BASE_URL}images/`;

const collections = [
  {
    title: "Graphic Oversize",
    text: "Heavyweight cotton with fade-safe prints.",
    image: `${imageBase}tshirt-real-2.png`
  },
  {
    title: "Core Essentials",
    text: "Clean staples in neutral palettes.",
    image: `${imageBase}tshirt-real-1.png`
  },
  {
    title: "Artist Capsules",
    text: "Collab releases in limited quantities.",
    image: `${imageBase}tshirt-real-4.png`
  }
];

const CollectionSection = () => {
  return (
    <section id="collection" className="collection-section">
      <div className="container py-5">
        <div className="section-head mb-4">
          <p className="section-kicker mb-1">Collections</p>
          <h3 className="section-title mb-0">Built For Every Mood</h3>
        </div>
        <div className="row g-4">
          {collections.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.title}>
              <article className="collection-card h-100">
                <img className="collection-image" src={item.image} alt={`${item.title} t-shirt collection`} />
                <div className="p-4">
                  <h4>{item.title}</h4>
                  <p className="mb-0">{item.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
