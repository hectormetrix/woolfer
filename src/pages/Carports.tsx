import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, CarFront, Flag, Hammer, Phone, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/CallToAction";
import { Location } from "@/components/Location";
import { ProductHeroForm } from "@/components/ProductHeroForm";
import { PromiseStrip } from "@/components/PromiseStrip";
import { Reviews } from "@/components/Reviews";
import { Stars } from "@/components/Stars";
import { products, site } from "@/data/site";

const carport = products.find((product) => product.name === "Carports")!;

const benefits = [
  {
    title: "Made for your vehicles",
    text: "Plan a useful covered space around your vehicles, driveway, and property.",
    icon: CarFront,
  },
  {
    title: "Built onsite",
    text: "Your carport is built right on your property—not delivered as a one-size-fits-all kit.",
    icon: Hammer,
  },
  {
    title: "Cedar, your way",
    text: "Start with cedar posts, then customize the structure to suit your home and needs.",
    icon: Ruler,
  },
];

export function CarportsPage({ onInspect }: { onInspect: () => void }) {
  return (
    <>
      <section className="hero hero-product-page" aria-label="Custom carports in San Antonio">
        <div className="hero-media">
          <img
            src={carport.image}
            className="hero-image active"
            alt="Custom carport built for a San Antonio property"
            width="1280"
            height="960"
            fetchPriority="high"
          />
          <div className="hero-shade" />
        </div>
        <div className="site-width hero-inner">
          <div className="hero-message">
            <p className="hero-kicker">
              <Flag aria-hidden="true" />
              Custom built in San Antonio
            </p>
            <h1>
              <span className="hero-line">Room to park.</span>
              <span className="hero-line">Shade to spare.</span>
              <span className="hero-script">Built your way.</span>
            </h1>
            <p className="hero-product-price">
              Starting at <strong>{carport.price}</strong> · {carport.note}
            </p>
            <p className="hero-copy">
              A carport designed for your property, built onsite, and made to feel right at home.
            </p>
            <div className="hero-ctas">
              <Button asChild variant="light" className="rock-button hero-cta-form">
                <a href="#free-inspection">
                  Free site inspection <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="light" className="rock-button hero-cta-call">
                <a href={site.phoneHref}>
                  <Phone /> Call {site.phoneShort}
                </a>
              </Button>
              <Button asChild variant="heroOutline" className="rock-button hero-cta-explore">
                <a href="#carport-details">
                  See what makes it yours <ArrowRight />
                </a>
              </Button>
            </div>
            <div className="hero-proof">
              <Stars />
              <span>
                <strong>100+ positive reviews.</strong> One trusted Texas builder.
              </span>
            </div>
          </div>
          <ProductHeroForm product="Carports" />
        </div>
      </section>

      <PromiseStrip />

      <section id="carport-details" className="carport-details-section">
        <div className="site-width">
          <div className="carport-details-heading" data-reveal>
            <div className="eyebrow">Your driveway, done differently</div>
            <h2 className="section-title">
              More than a place to park.
              <br />
              <em>A better fit for home.</em>
            </h2>
            <p>
              Start with the protection you need. We’ll help shape a custom carport around your
              vehicles, your space, and the look of your property.
            </p>
          </div>
          <div className="carport-benefits">
            {benefits.map(({ title, text, icon: Icon }, index) => (
              <article
                className="carport-benefit"
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <span className="carport-benefit-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="carport-build-section">
        <div className="site-width carport-build-inner">
          <div className="carport-build-image" data-reveal>
            <img
              src={carport.image}
              alt="A finished custom carport with cedar posts"
              width="1280"
              height="960"
              loading="lazy"
            />
            <span>
              <ShieldCheck aria-hidden="true" /> Limited warranty included
            </span>
          </div>
          <div className="carport-build-copy" data-reveal>
            <div className="eyebrow">A straightforward process</div>
            <h2 className="section-title">
              Your space.
              <br />
              <em>Your call.</em>
            </h2>
            <p>
              Every property is different. We’ll talk through the space, what you need covered, and
              the details that make the finished carport yours. Our team builds onsite and backs
              every structure with a limited warranty.
            </p>
            <Button className="rock-button" onClick={onInspect}>
              Request a free site inspection <ArrowUpRight />
            </Button>
          </div>
        </div>
      </section>

      <Reviews />
      <CallToAction onInspect={onInspect} />
      <Location />
    </>
  );
}
