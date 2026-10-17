import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hours, products, site } from "@/data/site";

export function Footer({
  onInspect,
}: {
  onInspect: () => void;
}) {
  return (
    <footer className="footer">
      <div className="site-width">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="footer-logo" href="/" aria-label="Woolfsheds home">
              <img
                className="brand-logo"
                src={site.logo}
                alt="Woolfsheds"
                width="1500"
                height="382"
                loading="lazy"
              />
            </a>
            <p>
              Veteran owned. Built onsite across San Antonio. Fully custom, backed by a limited
              warranty.
            </p>
          </div>
          <div className="footer-col">
            <h3>Visit us</h3>
            <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
              {site.addressLine1}
              <br />
              {site.addressLine2}
            </a>
            <a href={site.phoneHref}>{site.phoneFull}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="footer-col">
            <h3>Our hours</h3>
            <dl className="footer-hours">
              {hours.map(({ days, time }) => (
                <div key={days}>
                  <dt>{days}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <nav className="footer-col" aria-label="Footer navigation">
            <h3>Quick links</h3>
            {products.map((p) => (
              <Button
                asChild
                key={p.name}
                variant="inverseLink"
                className="footer-link"
              >
                <a href={`/${p.slug}`}>
                  <ArrowRight /> {p.name}
                </a>
              </Button>
            ))}
            <Button variant="inverseLink" className="footer-link" onClick={onInspect}>
              <ArrowRight /> Get a quote
            </Button>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            Copyright © 2026 JB Woolf Sheds | All Rights Reserved | A Limited Liability Company
          </span>
          <span>SEO, Online Marketing & Design by Metrix In Motion®</span>
        </div>
      </div>
    </footer>
  );
}
