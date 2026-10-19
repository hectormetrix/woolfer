import { useEffect, useState } from "react";
import {
  DoorOpen,
  Hammer,
  Layers3,
  Paintbrush,
  PanelsTopLeft,
  ShieldCheck,
  Square,
  Wrench,
} from "lucide-react";
import { CallToAction } from "@/components/CallToAction";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { shedStyles } from "@/data/shedStyles";

const SLIDE_MS = 7000;

const shedImages = shedStyles.map(({ image, name }) => ({ image, label: name }));

const optionGroups = [
  {
    title: "Structural Upgrades",
    options: [
      {
        title: "Deck & Porch",
        description:
          "Extend your shed with a sturdy deck. Add the porch and railing option for function and character.",
        badge: "Popular Option",
        items: [
          { label: "Deck (per sq. ft.)", price: "$20" },
          { label: "Porch (per sq. ft.)", price: "$20" },
        ],
      },
      {
        title: "Lofts",
        description: "Add additional space for storage with a roomy loft.",
        badge: "Extra Storage",
        items: [
          { label: "8′ x 4′ wide", price: "$149" },
          { label: "10′ x 4′ wide", price: "$159" },
          { label: "12′ x 4′ wide", price: "$199" },
          { label: "16′ x 4′ wide", price: "$229" },
        ],
      },
      {
        title: "Ventilation",
        description: "Improve air circulation and temperature control.",
        items: [
          { label: "12″ turbine vent", price: "$135" },
          { label: "Ridge vent (4 ft)", price: "$99" },
        ],
      },
      {
        title: "Floor Upgrades",
        description: "Enhance durability with premium flooring.",
        items: [
          { label: "3/4″ treated floor (per sq. ft.)", price: "$5" },
          { label: "5/8″ CDX plywood (per sq. ft.)", price: "$2" },
          { label: "3/4″ CDX plywood (per sq. ft.)", price: "$4" },
        ],
      },
      {
        title: "Workbench",
        description: "Add a sturdy, functional workspace.",
        items: [
          { label: "8′ x 2′ workbench", price: "$75" },
          { label: "10′ x 2′ workbench", price: "$85" },
          { label: "12′ x 2′ workbench", price: "$115" },
          { label: "16′ x 2′ workbench", price: "$130" },
        ],
      },
    ],
  },
  {
    title: "Access & Openings",
    options: [
      {
        title: "Shed Window",
        description: "Add light, ventilation, and visual appeal.",
        items: [{ label: "24″ x 36″ window", price: "$299" }],
      },
      {
        title: "House Door",
        description: "Improved access and security.",
        items: [
          { label: "36″ x 6′8″ 9-panel lite door", price: "$425" },
          { label: "36″ x 6′8″ 9-panel steel door", price: "$350" },
        ],
      },
      {
        title: "Wooden Ramp",
        description: "Easy access to your new shed.",
        items: [{ label: "Wooden access ramp", price: "$289" }],
      },
    ],
  },
  {
    title: "Finishing",
    options: [
      {
        title: "Exterior Paint",
        description: "Premium exterior latex paint in the color of your choice.",
        items: [{ label: "Premium exterior latex paint (per sq. ft.)", price: "$3" }],
      },
    ],
  },
];

const optionIcons = [PanelsTopLeft, Layers3, Wrench, ShieldCheck, Hammer, Square, DoorOpen, Paintbrush];
const optionCards = optionGroups.flatMap(({ title: category, options }, groupIndex) =>
  options.map((option, optionIndex) => ({
    ...option,
    category,
    Icon: optionIcons[(groupIndex + optionIndex) % optionIcons.length],
  })),
);

export function OptionsPage({ onInspect }: { onInspect: () => void }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(
      () => setSlide((current) => (current + 1) % shedImages.length),
      SLIDE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [slide]);

  return (
    <>
      <section className="options-hero hero" aria-label="Customize your perfect shed">
        <div className="hero-media">
          {shedImages.map(({ image, label }, index) => (
            <img
              key={label}
              src={image}
              className={`hero-image${slide === index ? " active" : ""}`}
              alt={`Custom ${label.toLowerCase()} shed`}
              width="1280"
              height="960"
              loading={slide === index ? "eager" : "lazy"}
            />
          ))}
          <div className="hero-shade" />
        </div>
        <div className="site-width options-hero-inner">
          <div className="options-hero-copy">
            <div className="eyebrow">Shed Options</div>
            <h1 className="section-title">
              Customize your
              <br />
              <em>perfect shed.</em>
            </h1>
            <p>
              From structural enhancements to cosmetic upgrades, we offer a wide range of options to
              make your shed truly yours.
            </p>
            <nav className="options-hero-tabs" aria-label="Choose a shed image">
              {shedImages.map(({ label }, index) => (
                <button
                  key={label}
                  type="button"
                  aria-label={`Show ${label} shed`}
                  aria-pressed={slide === index}
                  onClick={() => setSlide(index)}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="options-catalog">
        <div className="site-width">
          <div className="options-grid">
            {optionCards.map(({ category, title, description, badge, items, Icon }) => (
              <article className="options-card" key={title} data-reveal>
                <div className="options-card-heading">
                  <span className="options-card-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <span className="options-category">{category}</span>
                    <h2>{title}</h2>
                    {badge && <span className="options-badge">{badge}</span>}
                  </div>
                </div>
                <p className="options-card-description">{description}</p>
                <ul className="options-price-list">
                  {items.map(({ label, price }) => (
                    <li key={label}>
                      <span>{label}</span>
                      <strong>{price}</strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToAction onInspect={onInspect} />
      <Reviews />
      <Location />
    </>
  );
}
