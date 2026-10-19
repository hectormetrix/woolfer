import type { CSSProperties } from "react";
import { DoorOpen, Hammer, ShieldCheck } from "lucide-react";

const featureGroups = [
  {
    title: "Structure & Foundation",
    icon: Hammer,
    features: [
      "Concrete slab – 3000 LBS PSI capacity",
      "12′ boxed overhang on all 4 sides",
      "8′ walls, 16″ OC (on center) with triple stud corner",
    ],
  },
  {
    title: "Exterior & Finishing",
    icon: ShieldCheck,
    features: [
      "Primed, ready to paint siding with a 30 year warranty",
      "Tar paper",
      "Exterior caulking",
      "Vents in soffit/floor",
      "Your choice of color for shingles",
    ],
  },
  {
    title: "Doors, Windows & Warranty",
    icon: DoorOpen,
    features: [
      "Standard garage door",
      "Steel passage door",
      "One 2′ x 3′ window",
      "25-year warranty on shingles",
      "50-year warranty on Smart Panel siding",
      "5 year complete warranty",
    ],
  },
];

export function GarageStandardFeatures() {
  return (
    <section className="garage-standard-section">
      <div className="site-width">
        <div className="garage-standard-heading" data-reveal>
          <div className="eyebrow">Quality materials</div>
          <h2 className="section-title">Standard <em>features.</em></h2>
          <p>Quality materials and lasting protection come standard with every garage.</p>
        </div>
        <div className="garage-feature-groups">
          {featureGroups.map(({ title, icon: Icon, features }, index) => (
            <article
              className="garage-feature-group"
              key={title}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <div className="garage-feature-group-heading">
                <span className="garage-feature-icon">
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
