import { useState } from "react";

const dimensionsAndPrices = {
  "6": [
    { dimensions: "8′ x 8′ x 9.6′", price: "$3,549" },
    { dimensions: "8′ x 10′ x 9.6′", price: "$3,649" },
    { dimensions: "8′ x 12′ x 9.6′", price: "$3,749" },
    { dimensions: "8′ x 16′ x 9.6′", price: "$3,949" },
    { dimensions: "10′ x 10′ x 10′", price: "$3,849" },
    { dimensions: "10′ x 12′ x 10′", price: "$3,999" },
    { dimensions: "10′ x 16′ x 10′", price: "$4,249" },
    { dimensions: "10′ x 20′ x 10′", price: "$4,449" },
    { dimensions: "12′ x 12′ x 12′", price: "$4,649" },
    { dimensions: "12′ x 16′ x 12′", price: "$4,849" },
    { dimensions: "12′ x 20′ x 12′", price: "$5,049" },
    { dimensions: "12′ x 24′ x 12′", price: "$5,249" },
    { dimensions: "12′ x 32′ x 12′", price: "$5,649" },
  ],
  "7": [
    { dimensions: "10′ x 10′ x 11′", price: "$3,949" },
    { dimensions: "10′ x 12′ x 11′", price: "$4,149" },
    { dimensions: "10′ x 16′ x 11′", price: "$4,349" },
    { dimensions: "10′ x 18′ x 11′", price: "$4,549" },
    { dimensions: "10′ x 20′ x 11′", price: "$4,649" },
    { dimensions: "12′ x 12′ x 13′", price: "$4,749" },
    { dimensions: "12′ x 16′ x 13′", price: "$4,949" },
    { dimensions: "12′ x 20′ x 13′", price: "$5,149" },
    { dimensions: "16′ x 16′ x 15′", price: "$6,849" },
    { dimensions: "16′ x 20′ x 15′", price: "$7,449" },
    { dimensions: "16′ x 24′ x 15′", price: "$7,949" },
    { dimensions: "16′ x 32′ x 15′", price: "$8,849" },
  ],
  "8": [
    { dimensions: "12′ x 12′ x 14′", price: "$4,949" },
    { dimensions: "12′ x 16′ x 14′", price: "$5,149" },
    { dimensions: "12′ x 20′ x 14′", price: "$5,349" },
    { dimensions: "12′ x 24′ x 14′", price: "$5,549" },
    { dimensions: "16′ x 16′ x 16′", price: "$7,049" },
    { dimensions: "16′ x 20′ x 16′", price: "$7,549" },
    { dimensions: "16′ x 24′ x 16′", price: "$8,049" },
    { dimensions: "16′ x 32′ x 16′", price: "$9,049" },
  ],
};

type SidewallHeight = keyof typeof dimensionsAndPrices;

const sidewallHeights: SidewallHeight[] = ["6", "7", "8"];

export function BarnDimensionsPrices() {
  const [sidewallHeight, setSidewallHeight] = useState<SidewallHeight>("6");

  return (
    <section className="barn-pricing-section">
      <div className="site-width">
        <div className="barn-pricing-heading" data-reveal>
          <div className="eyebrow">Find your fit</div>
          <h2 className="section-title">Dimensions <em>&amp; Prices</em></h2>
          <p>Select a sidewall height to see available barn sizes and starting prices.</p>
        </div>
        <div className="barn-sidewall-selector" role="group" aria-label="Choose a sidewall height">
          {sidewallHeights.map((height) => (
            <button
              className="barn-sidewall-option"
              key={height}
              type="button"
              aria-pressed={sidewallHeight === height}
              onClick={() => setSidewallHeight(height)}
            >
              {height}′ sidewall
            </button>
          ))}
        </div>
        <div className="barn-pricing-grid" aria-live="polite">
          {dimensionsAndPrices[sidewallHeight].map(({ dimensions, price }) => (
            <article
              className="barn-price-card"
              key={dimensions}
            >
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
