import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Location() {
  return (
    <section id="visit" className="location-section">
      <div className="location-copy" data-reveal>
        <div className="eyebrow">Come talk shop</div>
        <h2 className="section-title">
          Local roots.
          <br />
          <em>Real people.</em>
        </h2>
        <div className="contact-list">
          <a
            className="contact-item"
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin aria-hidden="true" />
            <span>
              {site.addressLine1}
              <br />
              {site.addressLine2}
            </span>
          </a>
          <a className="contact-item" href={site.phoneHref}>
            <Phone aria-hidden="true" />
            <span>{site.phoneFull}</span>
          </a>
          <a className="contact-item" href={`mailto:${site.email}`}>
            <Mail aria-hidden="true" />
            <span>{site.email}</span>
          </a>
          <div className="contact-item">
            <Clock aria-hidden="true" />
            <span>
              Mon–Fri: 9am–6pm
              <br />
              Sat: 10am–4pm · Sun: Closed
            </span>
          </div>
        </div>
        <Button asChild className="rock-button">
          <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
            Get directions <ArrowUpRight />
          </a>
        </Button>
      </div>
      <iframe
        className="map"
        src={site.mapUrl}
        title="J.B. Woolfsheds showroom location in San Antonio"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  );
}
