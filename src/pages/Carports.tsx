import type { CSSProperties } from "react";
import { ArrowUpRight, CarFront, Hammer, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/CallToAction";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { PromiseStrip } from "@/components/PromiseStrip";
import { Reviews } from "@/components/Reviews";
import { products } from "@/data/site";

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
      <Hero
        productPage={{
          product: carport,
          kicker: "Custom built in San Antonio",
          headline: ["Room to park.", "Shade to spare."],
          script: "Built your way.",
          copy: "A carport designed for your property, built onsite, and made to feel right at home.",
          detailsHref: "#carport-details",
        }}
      />

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
