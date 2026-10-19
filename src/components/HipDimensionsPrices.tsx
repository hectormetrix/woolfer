import type { CSSProperties } from "react";

const dimensionsAndPrices = [
  { dimensions: "12′ x 10′ x 10′", price: "$5,900" },
  { dimensions: "16′ x 10′ x 10′", price: "$7,500" },
  { dimensions: "12′ x 12′ x 11′", price: "$6,800" },
  { dimensions: "16′ x 12′ x 11′", price: "$8,780" },
  { dimensions: "16′ x 16′ x 12′", price: "$11,300" },
  { dimensions: "20′ x 16′ x 12′", price: "$13,900" },
];

export function HipDimensionsPrices() {
  return (
    <section className="hip-pricing-section">
      <div className="site-width">
        <div className="hip-pricing-heading" data-reveal>
          <div className="eyebrow">Find your fit</div>
          <h2 className="section-title">Dimensions <em>&amp; Prices</em></h2>
          <p>Choose a Hip shed size to get started. Other sizes are available.</p>
        </div>
        <div className="hip-pricing-grid">
          {dimensionsAndPrices.map(({ dimensions, price }, index) => (
            <article
              className="hip-price-card"
              key={dimensions}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
            >
              <h3>{dimensions}</h3>
              <p>{price}</p>
            </article>
          ))}
          <a className="hip-price-card hip-price-card-more" href="#free-inspection">
            <span>Need another size?</span>
            <strong>Other sizes available</strong>
            <span className="hip-price-card-link">Ask us about your project</span>
          </a>
        </div>
      </div>
    </section>
  );
}
