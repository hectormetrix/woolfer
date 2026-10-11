import type { CSSProperties } from "react";
import { ArrowUpRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/Stars";
import { reviews, site } from "@/data/site";

export function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="site-width">
        <div className="review-header" data-reveal>
          <div>
            <div className="eyebrow">Built on trust</div>
            <h2 className="section-title">
              Good work. <em>Loud praise.</em>
            </h2>
          </div>
          <div className="review-score">
            <strong>100+</strong>
            <div>
              <Stars />
              <div>Positive customer reviews</div>
            </div>
          </div>
        </div>
        <div className="review-grid">
          {reviews.map((r, i) => (
            <article
              key={r.type}
              className="review-card"
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
            >
              <Quote className="review-mark" aria-hidden="true" />
              <Stars />
              <blockquote>{r.text}</blockquote>
              <div className="review-person">{r.type}</div>
              {/* Remove this label once the text above is from real customers. */}
              <div className="sample-label">
                Illustrative review — not an actual customer testimonial
              </div>
            </article>
          ))}
        </div>
        <div className="review-footer" data-reveal>
          <Button asChild className="rock-button">
            <a href={site.reviewsUrl} target="_blank" rel="noopener noreferrer">
              Read our Google reviews <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
