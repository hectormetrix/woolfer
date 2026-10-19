import type { CSSProperties } from "react";

const dimensionsAndPrices = [
  { dimensions: "10′ x 12′ x 11′", price: "$5,700" },
  { dimensions: "10′ x 16′ x 11′", price: "$7,180" },
  { dimensions: "12′ x 12′ x 12′", price: "$7,570" },
  { dimensions: "12′ x 16′ x 12′", price: "$8,390" },
  { dimensions: "16′ x 16′ x 12′", price: "$10,800" },
  { dimensions: "16′ x 20′ x 12′", price: "$13,160" },
];

export function ClubDimensionsPrices() {
  return (
    <section className="club-pricing-section">
      <div className="site-width">
        <div className="club-pricing-heading" data-reveal>
          <div className="eyebrow">Find your fit</div>
          <h2 className="section-title">Dimensions <em>&amp; Prices</em></h2>
          <p>Choose a Club shed size to get started. Other sizes are available.</p>
        </div>
        <div className="club-pricing-grid">
          {dimensionsAndPrices.map(({ dimensions, price }, index) => (
            <article
              className="club-price-card"
              key={dimensions}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
            >
              <h3>{dimensions}</h3>
              <p>{price}</p>
            </article>
          ))}
          <a className="club-price-card club-price-card-more" href="#free-inspection">
            <span>Need another size?</span>
            <strong>Other sizes available</strong>
            <span className="club-price-card-link">Ask us about your project</span>
          </a>
        </div>
      </div>
    </section>
  );
}
