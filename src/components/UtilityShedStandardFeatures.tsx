import type { CSSProperties } from "react";
import { Hammer, ShieldCheck } from "lucide-react";

const featureGroups = [
  {
    title: "Structure & Foundation",
    icon: Hammer,
    features: [
      "4×4 pressure-treated runners (skids)",
      "2×4 floor joists, 12″ on center for 6′, 8′, and 10′ widths",
      "2×6 floor joists, 12″ on center for 12′ and 16′ widths",
      "2×4 wall studs, 24″ on center",
      "2×4 and 2×4 roof rafters, 24″ on center depending on size and style",
      "1/2″ OSB (oriented strand board) floor and roof decking",
    ],
  },
  {
    title: "Exterior & Finishing",
    icon: ShieldCheck,
    features: [
      "Smart System Siding, primed and ready to paint, with a 50-year warranty",
      "25-year shingles in your choice of colors",
      "Two 8″ × 16″ vents for ventilation",
      "Exterior caulking",
      "5-year complete warranty",
      "Heavy-duty piano hinge for strength (hardware included)",
      "Professional workmanship",
    ],
  },
];

export function UtilityShedStandardFeatures() {
  return (
    <section className="utility-shed-standard-section">
      <div className="site-width">
        <div className="utility-shed-standard-heading" data-reveal>
          <div className="eyebrow">Premium quality</div>
          <h2 className="section-title">Standard <em>features.</em></h2>
          <p>Thoughtful construction and lasting materials come standard with every utility shed.</p>
        </div>
        <div className="utility-shed-feature-groups">
          {featureGroups.map(({ title, icon: Icon, features }, index) => (
            <article
              className="utility-shed-feature-group"
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <div className="utility-shed-feature-group-heading">
                <span className="utility-shed-feature-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
              </div>
              <ul>
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
