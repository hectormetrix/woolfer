import type { CSSProperties } from "react";
import {
  Eye,
  KeyRound,
  PanelsTopLeft,
  Sparkles,
  Square,
  Wrench,
} from "lucide-react";

const features = [
  { label: "Premium house doors with locks", icon: KeyRound },
  { label: "Lifetime shingles", icon: Sparkles },
  { label: "12″ boxed overhangs", icon: PanelsTopLeft },
  { label: "Double-pane windows", icon: Square },
  { label: "Higher-quality construction materials", icon: Wrench },
  { label: "Panoramic window designs for optimal views", icon: Eye },
];

export function ViewStandardFeatures() {
  return (
    <section className="view-standard-section">
      <div className="site-width">
        <div className="view-standard-heading" data-reveal>
          <div className="eyebrow">Premium quality</div>
          <h2 className="section-title">View shed <em>features.</em></h2>
          <p>Premium construction and panoramic windows make the View shed stand out.</p>
        </div>
        <ul className="view-feature-list">
          {features.map(({ label, icon: Icon }, index) => (
            <li
              className="view-feature"
              key={label}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
            >
              <span className="view-feature-icon">
                <Icon aria-hidden="true" />
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
