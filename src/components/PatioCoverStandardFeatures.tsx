import { Hammer, ShieldCheck } from "lucide-react";

const featureGroups = [
  {
    title: "Structure & Foundation",
    features: [
      "Free-standing patio cover",
      "6′ x 6′ cedar posts set in cement",
      "2′ x 6′ roof framing",
    ],
  },
  {
    title: "Exterior & Finishing",
    features: [
      "Patio tar paper",
      "25-year composition shingles",
      "Your choice of shingle color",
    ],
  },
];

export function PatioCoverStandardFeatures() {
  return (
    <section className="patio-cover-standard-section">
      <div className="site-width">
        <div className="patio-cover-standard-heading" data-reveal>
          <div className="eyebrow">Quality materials</div>
          <h2 className="section-title">Standard <em>features.</em></h2>
          <p>Quality materials come standard with every patio cover.</p>
        </div>
        <div className="patio-cover-feature-groups">
          {featureGroups.map(({ title, features }) => (
            <article className="patio-cover-feature-group" key={title} data-reveal>
              <div className="patio-cover-feature-group-heading">
                <span className="patio-cover-feature-icon">
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
