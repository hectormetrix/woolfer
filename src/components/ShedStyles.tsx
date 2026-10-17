import type { CSSProperties } from "react";

const utilityStyles = [
  {
    name: "Barn",
    description:
      "A familiar barn-inspired profile for a shed that feels right at home in the backyard.",
  },
  {
    name: "Gable",
    description:
      "A classic peaked roofline with a straightforward look that suits many properties.",
  },
  {
    name: "Overhang",
    description:
      "A roofline with added overhang for a distinctive profile and extra coverage at the edges.",
  },
];

const specialtyStyles = [{ name: "Club" }, { name: "Hip" }, { name: "View" }];

export function ShedStyles({ image }: { image: string }) {
  return (
    <>
      <section className="shed-styles-section">
        <div className="site-width">
          <div className="shed-styles-heading" data-reveal>
            <div className="eyebrow">UTILITY SHEDS</div>
            <h2 className="section-title">
              Three utility styles.
              <br />
              <em>Made yours.</em>
            </h2>
            <p>Choose a starting point, then customize your shed to suit your space and plans.</p>
          </div>
          <div className="shed-style-grid">
            {utilityStyles.map(({ name, description }, index) => (
              <article
                className="shed-style-card"
                key={name}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div className="shed-style-image">
                  <img
                    src={image}
                    alt="Custom shed reference photo; style-specific image to be added"
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

      <section className="shed-styles-section">
        <div className="site-width">
          <div className="shed-styles-heading" data-reveal>
            <div className="eyebrow">SPECIALTY SHEDS</div>
            <h2 className="section-title">
              Three specialty styles.
              <br />
              <em>Made yours.</em>
            </h2>
            <p>Explore the Club, Hip, and View specialty shed styles.</p>
          </div>
          <div className="shed-style-grid">
            {specialtyStyles.map(({ name }, index) => (
              <article
                className="shed-style-card"
                key={name}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div className="shed-style-image">
                  <img
                    src={image}
                    alt="Custom shed reference photo; style-specific image to be added"
                    width="1280"
                    height="960"
                    loading="lazy"
                  />
                </div>
                <div className="shed-style-copy">
                  <h3>{name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
