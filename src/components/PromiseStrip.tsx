import { Flag, Hammer, ShieldCheck, Star } from "lucide-react";
import { promises } from "@/data/site";

/* One icon per line in `promises`, in the same order. */
const icons = [Flag, Hammer, ShieldCheck, Star];

export function PromiseStrip() {
  return (
    <div className="promise-strip">
      <div className="site-width promise-inner">
        {promises.map((text, i) => {
          const Icon = icons[i % icons.length]!;
          return (
            <div className="promise" key={text}>
              <Icon aria-hidden="true" />
              <span>{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
