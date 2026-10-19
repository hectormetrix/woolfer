import { useState } from "react";

const dimensionsAndPrices = {
  "6": [
    { dimensions: "6′ x 6′ x 7′", price: "$3,099" },
    { dimensions: "6′ x 8′ x 7′", price: "$3,199" },
    { dimensions: "6′ x 10′ x 7′", price: "$3,299" },
    { dimensions: "6′ x 12′ x 7′", price: "$3,399" },
    { dimensions: "8′ x 8′ x 8′", price: "$3,300" },
    { dimensions: "8′ x 10′ x 8′", price: "$3,400" },
    { dimensions: "8′ x 12′ x 8′", price: "$3,500" },
    { dimensions: "8′ x 18′ x 8′", price: "$3,800" },
    { dimensions: "10′ x 10′ x 8′", price: "$3,749" },
    { dimensions: "10′ x 12′ x 8′", price: "$3,849" },
    { dimensions: "10′ x 16′ x 8′", price: "$3,949" },
    { dimensions: "10′ x 20′ x 8′", price: "$4,149" },
    { dimensions: "12′ x 12′ x 8.6′", price: "$4,249" },
    { dimensions: "12′ x 16′ x 8.6′", price: "$4,399" },
    { dimensions: "12′ x 20′ x 8.6′", price: "$4,599" },
    { dimensions: "12′ x 24′ x 8.6′", price: "$4,849" },
    { dimensions: "16′ x 16′ x 10.6′", price: "$5,449" },
    { dimensions: "16′ x 20′ x 10.6′", price: "$5,649" },
    { dimensions: "16′ x 24′ x 10.6′", price: "$5,849" },
    { dimensions: "16′ x 32′ x 10.6′", price: "$6,499" },
  ],
  "7": [
    { dimensions: "8′ x 12′ x 9′", price: "$3,600" },
    { dimensions: "10′ x 8′ x 9′", price: "$3,649" },
    { dimensions: "10′ x 12′ x 9′", price: "$3,999" },
    { dimensions: "10′ x 16′ x 9′", price: "$4,149" },
    { dimensions: "10′ x 20′ x 9′", price: "$4,249" },
    { dimensions: "12′ x 10′ x 9.6′", price: "$4,349" },
    { dimensions: "12′ x 12′ x 9.6′", price: "$4,449" },
    { dimensions: "12′ x 16′ x 9.6′", price: "$4,749" },
    { dimensions: "12′ x 20′ x 9.6′", price: "$4,949" },
    { dimensions: "16′ x 16′ x 11′", price: "$5,649" },
    { dimensions: "16′ x 20′ x 11′", price: "$6,049" },
    { dimensions: "16′ x 24′ x 11′", price: "$6,349" },
    { dimensions: "16′ x 32′ x 11′", price: "$6,899" },
  ],
  "8": [
    { dimensions: "12′ x 8′ x 10′", price: "$4,199" },
    { dimensions: "12′ x 12′ x 11′", price: "$4,549" },
    { dimensions: "12′ x 16′ x 11′", price: "$4,899" },
    { dimensions: "12′ x 20′ x 11′", price: "$5,100" },
    { dimensions: "12′ x 24′ x 11′", price: "$5,400" },
    { dimensions: "16′ x 16′ x 12′", price: "$5,849" },
    { dimensions: "16′ x 20′ x 12′", price: "$6,149" },
    { dimensions: "16′ x 24′ x 12′", price: "$6,749" },
    { dimensions: "16′ x 32′ x 12′", price: "$6,949" },
  ],
};

type SidewallHeight = keyof typeof dimensionsAndPrices;

const sidewallHeights: SidewallHeight[] = ["6", "7", "8"];

export function GableDimensionsPrices() {
  const [sidewallHeight, setSidewallHeight] = useState<SidewallHeight>("6");

  return (
    <section className="gable-pricing-section">
      <div className="site-width">
        <div className="gable-pricing-heading" data-reveal>
          <div className="eyebrow">Find your fit</div>
          <h2 className="section-title">Dimensions <em>&amp; Prices</em></h2>
          <p>Select a sidewall height to see available gable shed sizes and prices.</p>
        </div>
        <div className="gable-sidewall-selector" role="group" aria-label="Choose a sidewall height">
          {sidewallHeights.map((height) => (
            <button
              className="gable-sidewall-option"
              key={height}
              type="button"
              aria-pressed={sidewallHeight === height}
              onClick={() => setSidewallHeight(height)}
            >
              {height}′ sidewall
            </button>
          ))}
        </div>
        <div className="gable-pricing-grid" aria-live="polite">
          {dimensionsAndPrices[sidewallHeight].map(({ dimensions, price }) => (
            <article className="gable-price-card" key={dimensions}>
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
