const stats = [
  { value: "24H", label: "Dispatch Time" },
  { value: "100%", label: "Combed Cotton" },
  { value: "40K+", label: "Tees Delivered" },
  { value: "4.8/5", label: "Customer Rating" }
];

const BrandStats = () => {
  return (
    <section className="stats-section py-5">
      <div className="container">
        <div className="stats-wrap p-4 p-md-5">
          <div className="row g-3 g-md-4">
            {stats.map((item) => (
              <div className="col-6 col-lg-3" key={item.label}>
                <div className="stat-item text-center p-3 p-md-4">
                  <p className="stat-value mb-1">{item.value}</p>
                  <p className="stat-label mb-0">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStats;
