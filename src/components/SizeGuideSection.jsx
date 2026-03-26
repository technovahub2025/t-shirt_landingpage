const sizes = [
  { size: "S", chest: "36-38 in", length: "26 in", fit: "Slim" },
  { size: "M", chest: "38-40 in", length: "27 in", fit: "Regular" },
  { size: "L", chest: "40-42 in", length: "28 in", fit: "Regular" },
  { size: "XL", chest: "42-44 in", length: "29 in", fit: "Relaxed" },
  { size: "XXL", chest: "44-46 in", length: "30 in", fit: "Relaxed" }
];

const SizeGuideSection = () => {
  return (
    <section id="size-guide" className="size-guide-section py-5">
      <div className="container">
        <div className="size-guide-wrap p-4 p-md-5">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <p className="section-kicker mb-1">Size Guide</p>
              <h3 className="section-title mb-3">Find Your Best Fit Before You Buy</h3>
              <p className="mb-3">
                Compare chest and length measurements in inches. If you prefer an oversized
                look, go one size up.
              </p>
              <ul className="size-guide-notes mb-0">
                <li>All measurements are garment measurements.</li>
                <li>Fabric pre-shrunk to reduce wash shrinkage.</li>
                <li>Need help? Chat support is available daily.</li>
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="table-responsive">
                <table className="table size-table mb-0">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Chest</th>
                      <th>Length</th>
                      <th>Fit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((item) => (
                      <tr key={item.size}>
                        <td>{item.size}</td>
                        <td>{item.chest}</td>
                        <td>{item.length}</td>
                        <td>{item.fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuideSection;
