import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Flag, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InspectionRequest } from "@/components/InspectionRequest";
import { Stars } from "@/components/Stars";
import { products, site, type Product } from "@/data/site";

/** How long each photo stays up. Keep in step with `tab-fill` in styles.css. */
const SLIDE_MS = 7000;

type ProductPageContent = {
  product: Product;
  kicker: string;
  headline: [string, string];
  script: string;
  copy: string;
  detailsHref: string;
};

export function Hero({ productPage }: { productPage?: ProductPageContent }) {
  const [slide, setSlide] = useState(0);
  const heroProducts = productPage ? [productPage.product] : products;

  // Restarts its clock whenever the slide changes, so a manual pick always
  // gets a full turn and the progress bar stays in sync.
  useEffect(() => {
    if (productPage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setSlide((s) => (s + 1) % products.length), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [productPage, slide]);

  return (
    <section
      className={`hero${productPage ? " hero-product-page" : ""}`}
      aria-label={productPage ? `Custom ${productPage.product.name.toLowerCase()}` : "Custom Texas backyard structures"}
    >
      <div className="hero-media">
        {heroProducts.map((product, i) => (
          <img
            key={product.name}
            src={product.image}
            className={`hero-image${productPage || slide === i ? " active" : ""}`}
            alt={`Custom ${product.name.toLowerCase()} built for a Texas property`}
            width={productPage ? "1280" : "1920"}
            height={productPage ? "960" : "1080"}
            loading={productPage || i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="hero-shade" />
      </div>

      <div className="site-width hero-inner">
        <div className="hero-message">
          <p className="hero-kicker">
            {productPage ? (
              <>
                <Flag aria-hidden="true" /> {productPage.kicker}
              </>
            ) : (
              <>
                <Flag aria-hidden="true" /> Veteran owned <i aria-hidden="true" /> EST.1995
              </>
            )}
          </p>
          <h1>
            <span className="hero-line">{productPage?.headline[0] ?? "Built On"}</span>
            <span className="hero-line">{productPage?.headline[1] ?? "Your Lot."}</span>
            <span className="hero-script">{productPage?.script ?? "Built your way."}</span>
          </h1>
          {productPage && (
            <p className="hero-product-price">
              Starting at <strong>{productPage.product.price}</strong> · {productPage.product.note}
            </p>
          )}
          <p className="hero-copy">{productPage?.copy ??
            "Custom sheds, garages, patio covers and carports. Built on your property. Built to last."}</p>
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
              <a href={productPage?.detailsHref ?? `/${products[slide]?.slug}`}>
                {productPage ? "See what makes it yours" : `Explore ${products[slide]?.name}`}{" "}
                <ArrowRight />
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
            <InspectionRequest initialProduct={productPage?.product.name} />
          </div>
        </aside>

        {!productPage && (
          <nav className="hero-tabs" aria-label="Explore product pages">
            {products.map((p, i) => (
              <div key={p.name} className={`hero-tab${slide === i ? " active" : ""}`}>
                <span className="hero-tab-bar" aria-hidden="true">
                  <span />
                </span>
                <a className="hero-tab-name" href={`/${p.slug}`}>
                  {p.name}
                </a>
                <span className="hero-tab-price">From {p.price}</span>
              </div>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
