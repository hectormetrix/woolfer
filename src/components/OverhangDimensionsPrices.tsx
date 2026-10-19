import { useState } from "react";

const dimensionsAndPrices = {
  "7": [
    { dimensions: "10′ x 8′ x 9′", price: "$3,799" },
    { dimensions: "12′ x 8′ x 9′", price: "$3,899" },
    { dimensions: "16′ x 8′ x 9′", price: "$4,049" },
    { dimensions: "20′ x 8′ x 9′", price: "$4,249" },
    { dimensions: "10′ x 10′ x 9′", price: "$3,949" },
    { dimensions: "12′ x 10′ x 9′", price: "$4,049" },
    { dimensions: "16′ x 10′ x 9′", price: "$4,349" },
    { dimensions: "20′ x 10′ x 9′", price: "$4,649" },
    { dimensions: "12′ x 12′ x 10′", price: "$4,599" },
  ],
  "8": [
    { dimensions: "12′ x 10′ x 10′", price: "$4,199" },
    { dimensions: "16′ x 10′ x 10′", price: "$4,499" },
    { dimensions: "20′ x 10′ x 10′", price: "$4,899" },
    { dimensions: "12′ x 12′ x 11′", price: "$4,749" },
    { dimensions: "16′ x 12′ x 11′", price: "$5,349" },
    { dimensions: "20′ x 12′ x 11′", price: "$5,549" },
  ],
};

type SidewallHeight = keyof typeof dimensionsAndPrices;

const sidewallHeights: SidewallHeight[] = ["7", "8"];

export function OverhangDimensionsPrices() {
  const [sidewallHeight, setSidewallHeight] = useState<SidewallHeight>("7");

  return (
    <section className="overhang-pricing-section">
      <div className="site-width">
        <div className="overhang-pricing-heading" data-reveal>
          <div className="eyebrow">Find your fit</div>
          <h2 className="section-title">Dimensions <em>&amp; Prices</em></h2>
          <p>Select a sidewall height to see available overhang shed sizes and prices.</p>
        </div>
        <div className="overhang-sidewall-selector" role="group" aria-label="Choose a sidewall height">
          {sidewallHeights.map((height) => (
            <button
              className="overhang-sidewall-option"
              key={height}
              type="button"
              aria-pressed={sidewallHeight === height}
              onClick={() => setSidewallHeight(height)}
            >
              {height}′ sidewall
            </button>
          ))}
        </div>
        <div className="overhang-pricing-grid" aria-live="polite">
          {dimensionsAndPrices[sidewallHeight].map(({ dimensions, price }) => (
            <article className="overhang-price-card" key={dimensions}>
              <h3>{dimensions}</h3>
              <span>{sidewallHeight}′ sidewall</span>
              <p>{price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
