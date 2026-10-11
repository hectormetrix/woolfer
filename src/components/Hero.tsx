import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Flag, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InspectionRequest } from "@/components/InspectionRequest";
import { Stars } from "@/components/Stars";
import { products, site } from "@/data/site";

/** How long each photo stays up. Keep in step with `tab-fill` in styles.css. */
const SLIDE_MS = 7000;

export function Hero() {
  const [slide, setSlide] = useState(0);

  // Restarts its clock whenever the slide changes, so a manual pick always
  // gets a full turn and the progress bar stays in sync.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setSlide((s) => (s + 1) % products.length), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [slide]);

  return (
    <section className="hero" aria-label="Custom Texas backyard structures">
      <div className="hero-media">
        {products.map((product, i) => (
          <img
            key={product.name}
            src={product.image}
            className={`hero-image${slide === i ? " active" : ""}`}
            alt={`Custom ${product.name.toLowerCase()} built for a Texas property`}
            width="1920"
            height="1080"
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="hero-shade" />
      </div>

      <div className="site-width hero-inner">
        <div className="hero-message">
          <p className="hero-kicker">
            <Flag aria-hidden="true" /> Veteran owned <i aria-hidden="true" /> San Antonio proud
          </p>
          <h1>
            <span className="hero-line">Built Texas</span>
            <span className="hero-line">Tough.</span>
            <span className="hero-script">Built your way.</span>
          </h1>
          <p className="hero-copy">
            Custom sheds, garages, patio covers and carports. Built on your property. Built to last.
          </p>
          <div className="hero-ctas">
            {/* shown on tablet and phone, where the form sits further down */}
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
              <a href="#products">
                Explore our products <ArrowRight />
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

        <aside id="free-inspection" className="hero-form" aria-label="Free site inspection request">
          <div className="hero-form-head">
            <h2>Free site inspection</h2>
            <p>No pressure. Just possibilities.</p>
          </div>
          <div className="hero-form-body">
            <InspectionRequest />
          </div>
        </aside>

        <div className="hero-tabs" role="group" aria-label="Choose a product to preview">
          {products.map((p, i) => (
            <button
              key={p.name}
              type="button"
              className={`hero-tab${slide === i ? " active" : ""}`}
              aria-pressed={slide === i}
              onClick={() => setSlide(i)}
            >
              <span className="hero-tab-bar" aria-hidden="true">
                <span />
              </span>
              <span className="hero-tab-num" aria-hidden="true">
                0{i + 1}
              </span>
              <span className="hero-tab-text">
                <span className="hero-tab-name">{p.name}</span>
                <span className="hero-tab-price">From {p.price}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
