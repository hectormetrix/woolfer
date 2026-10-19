import type { CSSProperties } from "react";

const dimensionsAndPrices = [
  { dimensions: "12′ x 10′ x 10′", price: "$7,300" },
  { dimensions: "16′ x 10′ x 10′", price: "$9,400" },
  { dimensions: "12′ x 12′ x 11′", price: "$8,500" },
  { dimensions: "16′ x 12′ x 11′", price: "$11,000" },
  { dimensions: "16′ x 16′ x 12′", price: "$14,400" },
  { dimensions: "20′ x 16′ x 12′", price: "$17,700" },
];

export function ViewDimensionsPrices() {
  return (
    <section className="view-pricing-section">
      <div className="site-width">
        <div className="view-pricing-heading" data-reveal>
          <div className="eyebrow">Find your fit</div>
          <h2 className="section-title">Dimensions <em>&amp; Prices</em></h2>
          <p>Choose a View shed size to get started. Other sizes are available.</p>
        </div>
        <div className="view-pricing-grid">
          {dimensionsAndPrices.map(({ dimensions, price }, index) => (
            <article
              className="view-price-card"
              key={dimensions}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
            >
              <h3>{dimensions}</h3>
              <p>{price}</p>
            </article>
          ))}
          <a className="view-price-card view-price-card-more" href="#free-inspection">
            <span>Need another size?</span>
            <strong>Other sizes available</strong>
            <span className="view-price-card-link">Ask us about your project</span>
          </a>
        </div>
      </div>
    </section>
  );
}
