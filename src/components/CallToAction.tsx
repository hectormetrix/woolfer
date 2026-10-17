import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction({ onInspect }: { onInspect: () => void }) {
  return (
    <section className="inspection-section">
      <div className="site-width inspection-inner" data-reveal>
        <div>
          <h2 className="section-title">
            Your next big thing
            <br />
            starts in your backyard.
          </h2>
          <p>Let’s walk your property and talk possibilities. Your site inspection is on us.</p>
        </div>
        <div className="inspection-actions">
          <Button variant="light" className="rock-button" onClick={onInspect}>
            Schedule a free site inspection <ArrowUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
}