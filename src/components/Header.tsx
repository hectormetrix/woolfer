import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/data/site";
import { shedStyles } from "@/data/shedStyles";

export function Header({ onInspect }: { onInspect: () => void }) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Adds a shadow once the page has moved.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const inspect = () => {
    setMenu(false);
    onInspect();
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-width header-inner">
        <a className="brand-link" href="/" aria-label="Woolfsheds home">
          <img
            className="brand-logo"
            src={site.logo}
            alt="Woolfsheds — The Leader in Backyard Products"
            width="1500"
            height="382"
          />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {navLinks.map(({ label, id }) => id === "sheds" ? (
            <div className="nav-dropdown" key={id}>
              <a href={navigationHref(id)}>{label}</a>
              <nav className="nav-dropdown-menu" aria-label="Shed styles">
                {shedStyles.map(({ name, slug }) => (
                  <a key={slug} href={`/${slug}`}>{name}</a>
                ))}
                <a href="/options">Options</a>
              </nav>
            </div>
          ) : (
            <a
              key={id}
              href={navigationHref(id)}
              target={id === "reviews" ? "_blank" : undefined}
              rel={id === "reviews" ? "noopener noreferrer" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="phone-link" href={site.phoneHref}>
            <Phone aria-hidden="true" />
            {site.phoneShort}
          </a>
          <Button className="rock-button header-cta" onClick={inspect}>
            Get a free quote <ArrowUpRight />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={menu ? "Close navigation" : "Open navigation"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {menu && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map(({ label, id }) => id === "sheds" ? (
            <div className="mobile-shed-group" key={id}>
              <a href={navigationHref(id)} onClick={() => setMenu(false)}>{label}</a>
              <div className="mobile-shed-links" aria-label="Shed styles">
                {shedStyles.map(({ name, slug }) => (
                  <a key={slug} href={`/${slug}`} onClick={() => setMenu(false)}>{name}</a>
                ))}
                <a href="/options" onClick={() => setMenu(false)}>Options</a>
              </div>
            </div>
          ) : (
            <a
              key={id}
              href={navigationHref(id)}
              target={id === "reviews" ? "_blank" : undefined}
              rel={id === "reviews" ? "noopener noreferrer" : undefined}
              onClick={() => setMenu(false)}
            >
              {label}
            </a>
          ))}
          <a className="mobile-nav-phone" href={site.phoneHref}>
            <Phone aria-hidden="true" /> {site.phoneFull}
          </a>
          <Button className="rock-button" onClick={inspect}>
            Get a free quote <ArrowUpRight />
          </Button>
        </nav>
      )}
    </header>
  );
}

function navigationHref(id: string) {
  if (["sheds", "garages", "patio-covers", "carports"].includes(id)) return `/${id}`;
  if (id === "reviews") return site.reviewsUrl;

  const currentPath = typeof window === "undefined" ? "/" : window.location.pathname;
  const normalizedPath = currentPath.split(/[?#]/, 1)[0].replace(/\/+$/, "") || "/";
  return normalizedPath === "/" ? `#${id}` : `/#${id}`;
}
