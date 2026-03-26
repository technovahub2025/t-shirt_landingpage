const categories = [
  {
    name: "Minimal Core",
    description: "Clean shapes, balanced colors, ready for everyday fits.",
    marker: "MC",
    image: "/images/tshirt-real-1.png"
  },
  {
    name: "Graphic Heat",
    description: "Bold visual prints inspired by street art and music culture.",
    marker: "GH",
    image: "/images/tshirt-real-2.png"
  },
  {
    name: "Vintage Fade",
    description: "Washed textures and retro tones for classic styling.",
    marker: "VF",
    image: "/images/tshirt-real-3.png"
  }
];

const CategoryShowcase = () => {
  return (
    <section id="styles" className="category-section py-5">
      <div className="container">
        <div className="section-head mb-4">
          <p className="section-kicker mb-1">Style Direction</p>
          <h3 className="section-title mb-0">Choose Your Vibe</h3>
        </div>
        <div className="row g-4">
          {categories.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.name}>
              <article
                className="category-card h-100"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="category-overlay p-4">
                  <span className="category-marker">{item.marker}</span>
                  <h4 className="mb-1">{item.name}</h4>
                  <p className="mb-0">{item.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
