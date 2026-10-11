import type { CSSProperties } from "react";
import { ArrowUpRight, FileCheck2, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { reasons } from "@/data/site";

/* One icon per entry in `reasons`, in the same order. */
const icons = [Ruler, FileCheck2, ShieldCheck];

export function WhyWoolfsheds({ onInspect }: { onInspect: () => void }) {
  return (
    <section id="why-woolfsheds" className="custom-band">
      <div className="site-width custom-inner">
        <div className="custom-copy" data-reveal>
          <div className="eyebrow">No shortcuts. No runaround.</div>
          <h2 className="section-title">
            Your vision.
            <br />
            <em>Our boots on the ground.</em>
          </h2>
          <p>
            Forget the factory lot. We build right where you need it, with the craftsmanship your
            property deserves. From the first plan to the final nail, we handle the heavy lifting.
          </p>
          <Button variant="light" className="rock-button" onClick={onInspect}>
            Put us to work <ArrowUpRight />
          </Button>
        </div>
        <div className="reason-list">
          {reasons.map(({ title, text }, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <div
                className="reason"
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
              >
                <span className="reason-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
