import { useEffect, useState, type CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Flag, Home, Phone, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import barnShed from "@/assets/woolf-barn.jpg";
import clubShed from "@/assets/woolf-club.jpg";
import gableShed from "@/assets/woolf-gable.jpg";
import hipShed from "@/assets/woolf-hip.jpg";
import overhangShed from "@/assets/woolf-overhang.jpg";
import viewShed from "@/assets/woolf-view.jpg";
import { CallToAction } from "@/components/CallToAction";
import { Location } from "@/components/Location";
import { ProductHeroForm } from "@/components/ProductHeroForm";
import { PromiseStrip } from "@/components/PromiseStrip";
import { Reviews } from "@/components/Reviews";
import { ShedStyles } from "@/components/ShedStyles";
import { Stars } from "@/components/Stars";
import { products, site } from "@/data/site";

const shed = products.find((product) => product.name === "Sheds")!;
const SLIDE_MS = 7000;

const heroSlides = [
  { image: barnShed, label: "Barn" },
  { image: gableShed, label: "Gable" },
  { image: overhangShed, label: "Overhang" },
  { image: clubShed, label: "Club" },
  { image: hipShed, label: "Hip" },
  { image: viewShed, label: "View" },
];

export function ShedsPage({ onInspect }: { onInspect: () => void }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(
      () => setSlide((current) => (current + 1) % heroSlides.length),
      SLIDE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [slide]);

  return (
    <>
      <section className="hero hero-product-page hero-shed-slider" aria-label="Custom sheds in San Antonio">
        <div className="hero-media">
          {heroSlides.map(({ image, label }, index) => (
            <img
              key={label}
              src={image}
              className={`hero-image${slide === index ? " active" : ""}`}
              alt={`Custom ${label.toLowerCase()} shed built for a Texas property`}
              width="1280"
              height="960"
              loading={slide === index ? "eager" : "lazy"}
            />
          ))}
          <div className="hero-shade" />
        </div>
        <div className="site-width hero-inner">
          <div className="hero-message">
            <p className="hero-kicker">
              <Flag aria-hidden="true" /> Custom sheds in San Antonio
            </p>
            <h1>
              <span className="hero-line">Make room.</span>
              <span className="hero-line">Make it yours.</span>
              <span className="hero-script">Built your way.</span>
            </h1>
            <p className="hero-product-price">
              Starting at <strong>{shed.price}</strong> · {shed.note}
            </p>
            <p className="hero-copy">
              A custom shed built onsite to give your ideas, hobbies, and everyday essentials a
              place of their own.
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
                <a href="#product-details">
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
          <nav className="hero-tabs hero-slide-tabs" aria-label="Choose a shed style">
            {heroSlides.map(({ label }, index) => (
              <button
                key={label}
                type="button"
                className={`hero-tab${slide === index ? " active" : ""}`}
                aria-label={`Show ${label} shed`}
                aria-pressed={slide === index}
                onClick={() => setSlide(index)}
              >
                <span className="hero-tab-bar" aria-hidden="true">
                  <span />
                </span>
                <span className="hero-tab-name">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      <PromiseStrip />
      <ShedStyles />
      <section id="product-details" className="product-details-section">
        <div className="site-width">
          <div className="product-details-heading" data-reveal>
            <div className="eyebrow">A little more room changes everything</div>
            <h2 className="section-title">
              Space for your plans.
              <br />
              <em>Built for your place.</em>
            </h2>
            <p>
              From practical storage to a backyard retreat, we’ll help you choose a shed style and
              layout that fits your property and the way you want to use it.
            </p>
          </div>
          <div className="product-benefits">
            <article className="product-benefit" data-reveal>
              <span className="product-benefit-icon"><Home aria-hidden="true" /></span>
              <h3>Room to do more</h3>
              <p>Create organized storage, a backyard gym, a home office, an art studio, or whatever you need next.</p>
            </article>
            <article
              className="product-benefit"
              data-reveal
              style={{ "--reveal-delay": "90ms" } as CSSProperties}
            >
              <span className="product-benefit-icon"><Ruler aria-hidden="true" /></span>
              <h3>Designed around you</h3>
              <p>Choose a style, size, and details that work with your yard and make the space feel like yours.</p>
            </article>
            <article
              className="product-benefit"
              data-reveal
              style={{ "--reveal-delay": "180ms" } as CSSProperties}
            >
              <span className="product-benefit-icon"><ShieldCheck aria-hidden="true" /></span>
              <h3>Built onsite</h3>
              <p>Your shed is built right on your property with fiber cement siding and a limited warranty.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="product-build-section">
        <div className="site-width product-build-inner">
          <div className="product-build-image" data-reveal>
            <img src={shed.image} alt="A custom shed built for a San Antonio backyard" width="1280" height="960" loading="lazy" />
            <span><ShieldCheck aria-hidden="true" /> Limited warranty included</span>
          </div>
          <div className="product-build-copy" data-reveal>
            <div className="eyebrow">From idea to your backyard</div>
            <h2 className="section-title">
              A useful space.
              <br />
              <em>A personal touch.</em>
            </h2>
            <p>
              Start with what you want to make room for. We’ll help you explore utility and specialty
              shed styles, plan the right fit, and build it onsite for your property.
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
