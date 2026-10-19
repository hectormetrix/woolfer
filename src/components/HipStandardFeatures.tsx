import type { CSSProperties } from "react";
import {
  Hammer,
  Paintbrush,
  ShieldCheck,
} from "lucide-react";

const featureGroups = [
  {
    title: "Structure & Foundation",
    icon: Hammer,
    features: [
      "Built onsite",
      "Heavy-duty 3/4″ floor",
      "Double top plate",
      "16″ on-center studs",
    ],
  },
  {
    title: "Exterior & Protection",
    icon: ShieldCheck,
    features: [
      "Tyvek house wrap",
      "12″ boxed overhang",
      "Felt paper",
      "Drip edge",
    ],
  },
  {
    title: "Finishing & Details",
    icon: Paintbrush,
    features: [
      "Lifetime shingles",
      "Paint",
      "House door",
      "House window",
    ],
  },
];

export function HipStandardFeatures() {
  return (
    <section className="hip-standard-section">
      <div className="site-width">
        <div className="hip-standard-heading" data-reveal>
          <div className="eyebrow">Standard features</div>
          <h2 className="section-title">Hip shed <em>features.</em></h2>
          <p>Quality structure, exterior protection, and finishing details come standard.</p>
        </div>
        <div className="hip-feature-groups">
          {featureGroups.map(({ title, icon: Icon, features }, index) => (
            <article
              className="hip-feature-group"
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <div className="hip-feature-group-heading">
                <span className="hip-feature-icon">
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
