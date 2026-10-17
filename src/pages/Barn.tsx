import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Flag, Hammer, Phone, Ruler, ShieldCheck, Warehouse } from "lucide-react";
import barn from "@/assets/woolf-barn.jpg";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/CallToAction";
import { Location } from "@/components/Location";
import { ProductHeroForm } from "@/components/ProductHeroForm";
import { PromiseStrip } from "@/components/PromiseStrip";
import { Reviews } from "@/components/Reviews";
import { Stars } from "@/components/Stars";
import { products, site } from "@/data/site";

const shed = products.find((product) => product.name === "Sheds")!;

const benefits = [
  {
    title: "A classic barn profile",
    text: "The distinctive gambrel roof brings familiar barn character to a practical backyard shed.",
    icon: Warehouse,
  },
  {
    title: "Room for your plans",
    text: "Create useful space for tools, seasonal storage, hobbies, and the things you want close at hand.",
    icon: Ruler,
  },
  {
    title: "Built onsite for you",
    text: "Choose the details that suit your property, then have your barn-style shed built right in your backyard.",
    icon: Hammer,
  },
];

export function BarnPage({ onInspect }: { onInspect: () => void }) {
  return (
    <>
      <section className="hero hero-product-page" aria-label="Custom barn sheds in San Antonio">
        <div className="hero-media">
          <img
            src={barn}
            className="hero-image active"
            alt="Custom barn-style shed built for a Texas backyard"
            width="1280"
            height="960"
            fetchPriority="high"
          />
          <div className="hero-shade" />
        </div>
        <div className="site-width hero-inner">
          <div className="hero-message">
            <p className="hero-kicker">
              <Flag aria-hidden="true" /> Custom built in San Antonio
            </p>
            <h1>
              <span className="hero-line">Barn style.</span>
              <span className="hero-line">Room to spare.</span>
              <span className="hero-script">Built your way.</span>
            </h1>
            <p className="hero-product-price">
              Starting at <strong>{shed.price}</strong>
            </p>
            <p className="hero-copy">
              A barn-inspired shed with a distinctive roofline, useful space, and details chosen for
              your property.
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
                <a href="#barn-details">
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
          <ProductHeroForm product="Sheds" />
        </div>
      </section>

      <PromiseStrip />

      <section id="barn-details" className="product-details-section">
        <div className="site-width">
          <div className="product-details-heading" data-reveal>
            <div className="eyebrow">A familiar look, made for your backyard</div>
            <h2 className="section-title">
              Classic barn character.
              <br />
              <em>Space that works for you.</em>
            </h2>
            <p>
              Make room for storage, projects, or hobbies in a barn-style shed planned around your
              property and the way you want to use it.
            </p>
          </div>
          <div className="product-benefits">
            {benefits.map(({ title, text, icon: Icon }, index) => (
              <article
                className="product-benefit"
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <span className="product-benefit-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-build-section">
        <div className="site-width product-build-inner">
          <div className="product-build-image" data-reveal>
            <img
              src={barn}
              alt="A finished custom barn-style shed"
              width="1280"
              height="960"
              loading="lazy"
            />
            <span>
              <ShieldCheck aria-hidden="true" /> Limited warranty included
            </span>
          </div>
          <div className="product-build-copy" data-reveal>
            <div className="eyebrow">From your idea to your backyard</div>
            <h2 className="section-title">
              Make it yours.
              <br />
              <em>We’ll build it onsite.</em>
            </h2>
            <p>
              Tell us what you want to store or make room for. We’ll help plan a barn-style shed
              around your needs and property, then build it onsite with a limited warranty included.
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
