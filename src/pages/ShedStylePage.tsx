import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Flag, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarnDimensionsPrices } from "@/components/BarnDimensionsPrices";
import { CallToAction } from "@/components/CallToAction";
import { ClubDimensionsPrices } from "@/components/ClubDimensionsPrices";
import { ClubStandardFeatures } from "@/components/ClubStandardFeatures";
import { GableDimensionsPrices } from "@/components/GableDimensionsPrices";
import { HipDimensionsPrices } from "@/components/HipDimensionsPrices";
import { HipStandardFeatures } from "@/components/HipStandardFeatures";
import { Location } from "@/components/Location";
import { OverhangDimensionsPrices } from "@/components/OverhangDimensionsPrices";
import { ProductHeroForm } from "@/components/ProductHeroForm";
import { PromiseStrip } from "@/components/PromiseStrip";
import { Reviews } from "@/components/Reviews";
import { Stars } from "@/components/Stars";
import { UtilityShedStandardFeatures } from "@/components/UtilityShedStandardFeatures";
import { ViewDimensionsPrices } from "@/components/ViewDimensionsPrices";
import { ViewStandardFeatures } from "@/components/ViewStandardFeatures";
import { products, site } from "@/data/site";
import type { ShedStyle } from "@/data/shedStyles";

const shed = products.find((product) => product.name === "Sheds")!;

export function ShedStylePage({
  style,
  onInspect,
}: {
  style: ShedStyle;
  onInspect: () => void;
}) {
  const detailsId = `${style.slug}-details`;
  const specialtyStartingPrice = {
    club: "$5,700",
    hip: "$5,900",
    view: "$7,300",
  }[style.slug];

  return (
    <>
      <section className="hero hero-product-page" aria-label={`Custom ${style.name.toLowerCase()} sheds in San Antonio`}>
        <div className="hero-media">
          <img
            src={style.image}
            className="hero-image active"
            alt={`Custom ${style.name.toLowerCase()} shed built for a Texas backyard`}
            width="1280"
            height="960"
            fetchPriority="high"
          />
          <div className="hero-shade" />
        </div>
        <div className="site-width hero-inner">
          <div className="hero-message">
            <p className="hero-kicker">
              <Flag aria-hidden="true" /> Custom {style.name} sheds in San Antonio
            </p>
            <h1>
              <span className="hero-line">{style.heroLines[0]}</span>
              <span className="hero-line">{style.heroLines[1]}</span>
              <span className="hero-script">Built your way.</span>
            </h1>
            <p className="hero-product-price">
              Starting at <strong>{specialtyStartingPrice ?? shed.price}</strong>
              {style.category === "Specialty" && !specialtyStartingPrice && <> · {shed.note}</>}
            </p>
            <p className="hero-copy">{style.heroCopy}</p>
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
                <a href={`#${detailsId}`}>
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
      {style.category === "Utility" && <UtilityShedStandardFeatures />}
      {style.slug === "barn" && <BarnDimensionsPrices />}
      {style.slug === "gable" && <GableDimensionsPrices />}
      {style.slug === "overhang" && <OverhangDimensionsPrices />}
      {style.slug === "club" && (
        <>
          <ClubStandardFeatures />
          <ClubDimensionsPrices />
        </>
      )}
      {style.slug === "hip" && (
        <>
          <HipStandardFeatures />
          <HipDimensionsPrices />
        </>
      )}
      {style.slug === "view" && (
        <>
          <ViewStandardFeatures />
          <ViewDimensionsPrices />
        </>
      )}

      <section id={detailsId} className="product-details-section">
        <div className="site-width">
          <div className="product-details-heading" data-reveal>
            <div className="eyebrow">{style.detailsEyebrow}</div>
            <h2 className="section-title">
              {style.detailsLines[0]}
              <br />
              <em>{style.detailsLines[1]}</em>
            </h2>
            <p>{style.detailsCopy}</p>
          </div>
          <div className="product-benefits">
            {style.benefits.map(({ title, text, icon: Icon }, index) => (
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
              src={style.image}
              alt={`A finished custom ${style.name.toLowerCase()} shed`}
              width="1280"
              height="960"
              loading="lazy"
            />
            <span>
              <ShieldCheck aria-hidden="true" /> Limited warranty included
            </span>
          </div>
          <div className="product-build-copy" data-reveal>
            <div className="eyebrow">{style.buildEyebrow}</div>
            <h2 className="section-title">
              {style.buildLines[0]}
              <br />
              <em>{style.buildLines[1]}</em>
            </h2>
            <p>{style.buildCopy}</p>
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
