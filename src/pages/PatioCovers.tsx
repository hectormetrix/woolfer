import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Flag, Phone, Ruler, ShieldCheck, Sun, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/CallToAction";
import { PatioCoverDimensionsPrices } from "@/components/PatioCoverDimensionsPrices";
import { PatioCoverStandardFeatures } from "@/components/PatioCoverStandardFeatures";
import { Location } from "@/components/Location";
import { ProductHeroForm } from "@/components/ProductHeroForm";
import { PromiseStrip } from "@/components/PromiseStrip";
import { Reviews } from "@/components/Reviews";
import { Stars } from "@/components/Stars";
import { products, site } from "@/data/site";

const patioCover = products.find((product) => product.name === "Patio Covers")!;

export function PatioCoversPage({ onInspect }: { onInspect: () => void }) {
  return (
    <>
      <section className="hero hero-product-page" aria-label="Custom patio covers in San Antonio">
        <div className="hero-media">
          <img
            src={patioCover.image}
            className="hero-image active"
            alt="Custom patio cover built for a San Antonio home"
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
              <span className="hero-line">Find your shade.</span>
              <span className="hero-line">Stay awhile.</span>
              <span className="hero-script">Built your way.</span>
            </h1>
            <p className="hero-product-price">
              Starting at <strong>{patioCover.price}</strong> · {patioCover.note}
            </p>
            <p className="hero-copy">
              Make more of your backyard with a custom patio cover designed for your home and the
              Texas sun.
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
                <a href="#patio-cover-details">
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
          <ProductHeroForm product="Patio Covers" />
        </div>
      </section>

      <PromiseStrip />
      <PatioCoverStandardFeatures />
      <PatioCoverDimensionsPrices />

      <section id="patio-cover-details" className="product-details-section">
        <div className="site-width">
          <div className="product-details-heading" data-reveal>
            <div className="eyebrow">Make the outdoors your favorite room</div>
            <h2 className="section-title">
              More shade.
              <br />
              <em>More time outside.</em>
            </h2>
            <p>
              Create a comfortable place to gather, relax, and enjoy your backyard. We’ll shape a
              patio cover around your home, your space, and how you like to spend time outdoors.
            </p>
          </div>
          <div className="product-benefits">
            <article className="product-benefit" data-reveal>
              <span className="product-benefit-icon"><Ruler aria-hidden="true" /></span>
              <h3>Made for your space</h3>
              <p>Plan a patio cover to complement your home and make the most of your outdoor area.</p>
            </article>
            <article
              className="product-benefit"
              data-reveal
              style={{ "--reveal-delay": "90ms" } as CSSProperties}
            >
              <span className="product-benefit-icon"><Sun aria-hidden="true" /></span>
              <h3>Ready for Texas days</h3>
              <p>Add a welcome break from the sun and make your patio more comfortable through the seasons.</p>
            </article>
            <article
              className="product-benefit"
              data-reveal
              style={{ "--reveal-delay": "180ms" } as CSSProperties}
            >
              <span className="product-benefit-icon"><Wrench aria-hidden="true" /></span>
              <h3>Built with care</h3>
              <p>Substantial cedar posts, proper fastening, and a limited warranty are part of the build.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="product-build-section">
        <div className="site-width product-build-inner">
          <div className="product-build-image" data-reveal>
            <img
              src={patioCover.image}
              alt="A custom patio cover built for a San Antonio home"
              width="1280"
              height="960"
              loading="lazy"
            />
            <span><ShieldCheck aria-hidden="true" /> Limited warranty included</span>
          </div>
          <div className="product-build-copy" data-reveal>
            <div className="eyebrow">A straightforward process</div>
            <h2 className="section-title">
              Your backyard.
              <br />
              <em>Your new favorite.</em>
            </h2>
            <p>
              We’ll talk through your patio, what you want from the space, and the details that
              bring it together. Our team handles the build and necessary permits, so you can look
              forward to more time outside.
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
