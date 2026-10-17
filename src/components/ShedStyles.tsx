import type { CSSProperties } from "react";
import { shedStyles } from "@/data/shedStyles";

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
            {shedStyles.filter(({ category }) => category === "Utility").map(({ name, slug, image, description }, index) => (
              <article
                className="shed-style-card"
                key={name}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <a className="shed-style-card-link" href={`/${slug}`}>
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
            {shedStyles.filter(({ category }) => category === "Specialty").map(({ name, slug, image, description }, index) => (
              <article
                className="shed-style-card"
                key={name}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <a className="shed-style-card-link" href={`/${slug}`}>
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
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
