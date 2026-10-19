import type { CSSProperties } from "react";

const dimensionsAndPrices = [
  { dimensions: "12′ x 20′", price: "$12,000" },
  { dimensions: "16′ x 20′", price: "$16,000" },
  { dimensions: "20′ x 20′", price: "$20,000" },
  { dimensions: "22′ x 24′", price: "$26,400" },
  { dimensions: "24′ x 24′", price: "$28,000" },
  { dimensions: "24′ x 30′", price: "$36,000" },
];

export function GarageDimensionsPrices() {
  return (
    <section className="garage-pricing-section">
      <div className="site-width">
        <div className="garage-pricing-heading" data-reveal>
          <div className="eyebrow">Find your fit</div>
          <h2 className="section-title">Dimensions <em>&amp; Prices</em></h2>
          <p>Standard pricing for garages with 8′ sidewalls.</p>
        </div>
        <div className="garage-pricing-grid">
          {dimensionsAndPrices.map(({ dimensions, price }, index) => (
            <article
              className="garage-price-card"
              key={dimensions}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
            >
              <h3>{dimensions}</h3>
              <span>8′ sidewall</span>
              <p>{price}</p>
            </article>
          ))}
        </div>
        <p className="garage-pricing-note" data-reveal>
          Need a different size? Custom sizes are available.
        </p>
      </div>
    </section>
  );
}
