import type { CSSProperties } from "react";
import barn from "@/assets/woolf-barn.jpg";
import club from "@/assets/woolf-club.jpg";
import gable from "@/assets/woolf-gable.jpg";
import hip from "@/assets/woolf-hip.jpg";
import overhang from "@/assets/woolf-overhang.jpg";
import view from "@/assets/woolf-view.jpg";

const utilityStyles = [
  {
    name: "Barn",
    image: barn,
    description:
      "A familiar barn-inspired profile for a shed that feels right at home in the backyard.",
  },
  {
    name: "Gable",
    image: gable,
    description:
      "A classic peaked roofline with a straightforward look that suits many properties.",
  },
  {
    name: "Overhang",
    image: overhang,
    description:
      "A roofline with added overhang for a distinctive profile and extra coverage at the edges.",
  },
];

const specialtyStyles = [
  {
    name: "Club",
    image: club,
    description:
      "A refined backyard retreat with home-inspired details, ideal for an office, getaway, or premium storage.",
  },
  {
    name: "Hip",
    image: hip,
    description:
      "A graceful roofline and durable construction create a versatile shed with added weather protection.",
  },
  {
    name: "View",
    image: view,
    description:
      "A bright, home-inspired retreat with wide views—perfect for an office, studio, or backyard escape.",
  },
];

export function ShedStyles() {
  return (
    <>
      <section className="shed-styles-section">
        <div className="site-width">
          <div className="shed-styles-heading" data-reveal>
            <div className="eyebrow">UTILITY SHEDS</div>
            <h2 className="section-title">
              Traditional Shed Styles.
              <br />
              <em>Built to order on your lot.</em>
            </h2>
            <p>Choose a starting point, then customize your shed to suit your space and plans.</p>
          </div>
          <div className="shed-style-grid">
            {utilityStyles.map(({ name, image, description }, index) => (
              <article
                className="shed-style-card"
                key={name}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                {name === "Barn" ? (
                  <a className="shed-style-card-link" href="/barn">
                    <div className="shed-style-image">
                      <img
                        src={image}
                        alt={`${name} utility shed`}
                        width="1280"
                        height="960"
                        loading="lazy"
                      />
                    </div>
                    <div className="shed-style-copy">
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </div>
                  </a>
                ) : (
                  <>
                    <div className="shed-style-image">
                      <img
                        src={image}
                        alt={`${name} utility shed`}
                        width="1280"
                        height="960"
                        loading="lazy"
                      />
                    </div>
                    <div className="shed-style-copy">
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shed-styles-section">
        <div className="site-width">
          <div className="shed-styles-heading" data-reveal>
            <div className="eyebrow">SPECIALTY SHEDS</div>
            <h2 className="section-title">
              Your Favorite upgrades.
              <br />
              <em>Included in our prices.</em>
            </h2>
            <p>Explore the Club, Hip, and View specialty shed styles.</p>
          </div>
          <div className="shed-style-grid">
            {specialtyStyles.map(({ name, image, description }, index) => (
              <article
                className="shed-style-card"
                key={name}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div className="shed-style-image">
                  <img
                    src={image}
                    alt={`${name} specialty shed`}
                    width="1280"
                    height="960"
                    loading="lazy"
                  />
                </div>
                <div className="shed-style-copy">
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
