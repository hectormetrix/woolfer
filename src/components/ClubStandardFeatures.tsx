import type { CSSProperties } from "react";
import {
  DoorOpen,
  KeyRound,
  PanelsTopLeft,
  Square,
  Sparkles,
  Wrench,
} from "lucide-react";

const features = [
  { label: "Premium house doors with locks", icon: KeyRound },
  { label: "Lifetime shingles", icon: Sparkles },
  { label: "12″ boxed overhangs", icon: PanelsTopLeft },
  { label: "Double-pane windows", icon: Square },
  { label: "Higher-quality construction materials", icon: Wrench },
  { label: "Customizable interior options", icon: DoorOpen },
];

export function ClubStandardFeatures() {
  return (
    <section className="club-standard-section">
      <div className="site-width">
        <div className="club-standard-heading" data-reveal>
          <div className="eyebrow">Premium quality</div>
          <h2 className="section-title">Club shed <em>features.</em></h2>
          <p>Thoughtful upgrades and premium materials come standard with the Club shed.</p>
        </div>
        <ul className="club-feature-list">
          {features.map(({ label, icon: Icon }, index) => (
            <li
              className="club-feature"
              key={label}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
            >
              <span className="club-feature-icon">
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
