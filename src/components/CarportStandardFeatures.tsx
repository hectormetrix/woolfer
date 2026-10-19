import { Hammer, ShieldCheck } from "lucide-react";

const featureGroups = [
  {
    title: "Structure & Foundation",
    features: [
      "Free standing carport and patio cover",
      "6′ x 6′ cedar posts in cement",
      "2′ x 6′ roof",
    ],
  },
  {
    title: "Exterior & Finishing",
    features: [
      "Patio tar paper",
      "25 year composition shingles",
      "Your choice of color shingles",
    ],
  },
];

export function CarportStandardFeatures() {
  return (
    <section className="carport-standard-section">
      <div className="site-width">
        <div className="carport-standard-heading" data-reveal>
          <div className="eyebrow">Quality materials</div>
          <h2 className="section-title">Standard <em>features.</em></h2>
          <p>Quality materials come standard with every carport.</p>
        </div>
        <div className="carport-feature-groups">
          {featureGroups.map(({ title, features }) => (
            <article className="carport-feature-group" key={title} data-reveal>
              <div className="carport-feature-group-heading">
                <span className="carport-feature-icon">
                  {title === "Structure & Foundation" ? (
                    <Hammer aria-hidden="true" />
                  ) : (
                    <ShieldCheck aria-hidden="true" />
                  )}
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
