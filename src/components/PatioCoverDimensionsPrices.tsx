const dimensionsAndPrices = [
  { dimensions: "12′ x 10′", price: "$4,800" },
  { dimensions: "12′ x 20′", price: "$9,600" },
  { dimensions: "12′ x 30′", price: "$14,400" },
  { dimensions: "16′ x 20′", price: "$12,800" },
  { dimensions: "16′ x 24′", price: "$15,360" },
  { dimensions: "16′ x 30′", price: "$19,200" },
  { dimensions: "20′ x 20′", price: "$16,000" },
  { dimensions: "20′ x 24′", price: "$19,200" },
  { dimensions: "20′ x 30′", price: "$24,000" },
  { dimensions: "24′ x 24′", price: "$23,040" },
  { dimensions: "24′ x 30′", price: "$28,800" },
];

export function PatioCoverDimensionsPrices() {
  return (
    <section className="patio-cover-pricing-section">
      <div className="site-width">
        <div className="patio-cover-pricing-heading" data-reveal>
          <div className="eyebrow">Find your fit</div>
          <h2 className="section-title">Dimensions <em>&amp; Prices</em></h2>
          <p>Choose a size to get started. Other sizes are available.</p>
        </div>
        <div className="patio-cover-pricing-grid" data-reveal>
          {dimensionsAndPrices.map(({ dimensions, price }) => (
            <article className="patio-cover-price-card" key={dimensions}>
              <h3>{dimensions}</h3>
              <p>{price}</p>
            </article>
          ))}
          <a className="patio-cover-price-card patio-cover-price-card-more" href="#free-inspection">
            <span>Need another size?</span>
            <strong>Other sizes available</strong>
            <span className="patio-cover-price-card-link">Ask us about your project</span>
          </a>
        </div>
      </div>
    </section>
  );
}
