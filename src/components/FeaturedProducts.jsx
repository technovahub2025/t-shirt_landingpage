const products = [
  {
    name: "Neon Alley Tee",
    price: "Rs. 899",
    tag: "Best Seller",
    image: "/images/tshirt-real-1.png"
  },
  {
    name: "Static Noise Tee",
    price: "Rs. 1,099",
    tag: "New Drop",
    image: "/images/tshirt-real-2.png"
  },
  {
    name: "Mono Drift Tee",
    price: "Rs. 799",
    tag: "Essential",
    image: "/images/tshirt-real-3.png"
  },
  {
    name: "City Pulse Tee",
    price: "Rs. 999",
    tag: "Limited",
    image: "/images/tshirt-real-4.png"
  }
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="products-section py-5">
      <div className="container">
        <div className="section-head mb-4">
          <p className="section-kicker mb-1">Featured</p>
          <h3 className="section-title mb-0">Popular T-Shirts</h3>
        </div>
        <div className="row g-4">
          {products.map((item) => (
            <div className="col-sm-6 col-lg-3" key={item.name}>
              <article className="product-card h-100 p-3">
                <img className="product-image mb-3" src={item.image} alt={item.name} />
                <span className="product-tag">{item.tag}</span>
                <h4 className="product-name mt-2 mb-1">{item.name}</h4>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="product-price mb-0">{item.price}</p>
                  <button className="btn btn-sm btn-brand px-3">Add</button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
