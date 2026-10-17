import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight, ShieldCheck, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/CallToAction";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { PromiseStrip } from "@/components/PromiseStrip";
import { Reviews } from "@/components/Reviews";
import type { Product } from "@/data/site";

type ProductPageFeature = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type ProductPageContent = {
  product: Product;
  kicker: string;
  headline: [string, string];
  script: string;
  copy: string;
  detailsEyebrow: string;
  detailsHeadline: [string, string];
  detailsCopy: string;
  features: ProductPageFeature[];
  buildEyebrow: string;
  buildHeadline: [string, string];
  buildCopy: string;
  imageAlt: string;
  onInspect: () => void;
  children?: ReactNode;
};

export function ProductPage({
  product,
  kicker,
  headline,
  script,
  copy,
  detailsEyebrow,
  detailsHeadline,
  detailsCopy,
  features,
  buildEyebrow,
  buildHeadline,
  buildCopy,
  imageAlt,
  onInspect,
  children,
}: ProductPageContent) {
  return (
    <>
      <Hero
        productPage={{
          product,
          kicker,
          headline,
          script,
          copy,
          detailsHref: "#product-details",
        }}
      />

      <PromiseStrip />
      {children}

      <section id="product-details" className="product-details-section">
        <div className="site-width">
          <div className="product-details-heading" data-reveal>
            <div className="eyebrow">{detailsEyebrow}</div>
            <h2 className="section-title">
              {detailsHeadline[0]}
              <br />
              <em>{detailsHeadline[1]}</em>
            </h2>
            <p>{detailsCopy}</p>
          </div>
          <div className="product-benefits">
            {features.map(({ title, text, icon: Icon }, index) => (
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
            <img src={product.image} alt={imageAlt} width="1280" height="960" loading="lazy" />
            <span>
              <ShieldCheck aria-hidden="true" /> Limited warranty included
            </span>
          </div>
          <div className="product-build-copy" data-reveal>
            <div className="eyebrow">{buildEyebrow}</div>
            <h2 className="section-title">
              {buildHeadline[0]}
              <br />
              <em>{buildHeadline[1]}</em>
            </h2>
            <p>{buildCopy}</p>
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
