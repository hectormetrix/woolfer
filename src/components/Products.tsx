import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/site";

export function Products() {
  return (
    <section id="products" className="products-section">
      <div className="site-width">
        <div className="section-heading" data-reveal>
          <div>
            <div className="eyebrow">Your backyard. Upgraded.</div>
            <h2 className="section-title">
              What do we build? <em>Whatever you need.</em>
            </h2>
          </div>
          <p className="section-description">
            Not one-size-fits-all. One-size-fits-you. Find your structure. We’ll make it yours.
          </p>
        </div>
        <div className="product-grid">
          {products.map((p, i) => (
            <article
              className="product"
              key={p.name}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
            >
              <a
                href={`/${p.slug}`}
                className="product-image-wrap"
                aria-label={`Explore custom ${p.name}`}
              >
                <img
                  src={p.image}
                  alt={`Custom ${p.name.toLowerCase()} in San Antonio`}
                  width="1280"
                  height="960"
                  loading="lazy"
                />
                <span className="product-num">0{i + 1}</span>
                <span className="product-name">{p.name}</span>
              </a>
              <div className="product-body">
                <h3 className="sr-only">{p.name}</h3>
                <p className="product-description">{p.description}</p>
                <div className="product-price">
                  <span>Starting at</span>
                  <strong>{p.price}</strong>
                </div>
                <div className="product-note">{p.note}</div>
                <Button
                  asChild
                  variant="outline"
                  className="rock-button product-link"
                >
                  <a href={`/${p.slug}`}>
                    Explore {p.name} <ArrowRight />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
