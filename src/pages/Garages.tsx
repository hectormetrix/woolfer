import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, FileCheck2, Flag, Home, Phone, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/CallToAction";
import { Location } from "@/components/Location";
import { ProductHeroForm } from "@/components/ProductHeroForm";
import { PromiseStrip } from "@/components/PromiseStrip";
import { Reviews } from "@/components/Reviews";
import { Stars } from "@/components/Stars";
import { products, site } from "@/data/site";

const garage = products.find((product) => product.name === "Garages")!;

export function GaragesPage({ onInspect }: { onInspect: () => void }) {
  return (
    <>
      <section className="hero hero-product-page" aria-label="Custom garages in San Antonio">
        <div className="hero-media">
          <img
            src={garage.image}
            className="hero-image active"
            alt="Custom garage built for a San Antonio property"
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
              <span className="hero-line">Protect what</span>
              <span className="hero-line">moves you.</span>
              <span className="hero-script">Built your way.</span>
            </h1>
            <p className="hero-product-price">
              Starting at <strong>{garage.price}</strong> · {garage.note}
            </p>
            <p className="hero-copy">
              A custom garage planned around your vehicles, your property, and the look of your home.
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
                <a href="#garage-details">
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
          <ProductHeroForm product="Garages" />
        </div>
      </section>

      <PromiseStrip />

      <section id="garage-details" className="product-details-section">
        <div className="site-width">
          <div className="product-details-heading" data-reveal>
            <div className="eyebrow">A better fit for home</div>
            <h2 className="section-title">
              Bring it all
              <br />
              <em>under one roof.</em>
            </h2>
            <p>
              Whether you need room for a vehicle, tools, or a little extra breathing room, we’ll
              help plan a garage that works for your property and your day-to-day.
            </p>
          </div>
          <div className="product-benefits">
            <article className="product-benefit" data-reveal>
              <span className="product-benefit-icon"><Ruler aria-hidden="true" /></span>
              <h3>Planned for your property</h3>
              <p>Shape the size and layout around your vehicles, access points, storage, and available space.</p>
            </article>
            <article
              className="product-benefit"
              data-reveal
              style={{ "--reveal-delay": "90ms" } as CSSProperties}
            >
              <span className="product-benefit-icon"><Home aria-hidden="true" /></span>
              <h3>Concrete slab included</h3>
              <p>Starting garage pricing includes the concrete slab, with custom options available.</p>
            </article>
            <article
              className="product-benefit"
              data-reveal
              style={{ "--reveal-delay": "180ms" } as CSSProperties}
            >
              <span className="product-benefit-icon"><FileCheck2 aria-hidden="true" /></span>
              <h3>Help with the details</h3>
              <p>Our team handles engineering plans and permits to help keep your project moving.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="product-build-section">
        <div className="site-width product-build-inner">
          <div className="product-build-image" data-reveal>
            <img
              src={garage.image}
              alt="A custom garage built for a San Antonio property"
              width="1280"
              height="960"
              loading="lazy"
            />
            <span><ShieldCheck aria-hidden="true" /> Limited warranty included</span>
          </div>
          <div className="product-build-copy" data-reveal>
            <div className="eyebrow">One experienced team</div>
            <h2 className="section-title">
              From the plans
              <br />
              <em>to the parking.</em>
            </h2>
            <p>
              Tell us what you need to protect and how you want to use the space. We’ll talk through
              the site, plans, and options, then build a garage that feels right at home.
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
