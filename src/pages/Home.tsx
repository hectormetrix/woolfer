import { CallToAction } from "@/components/CallToAction";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Products } from "@/components/Products";
import { PromiseStrip } from "@/components/PromiseStrip";
import { Reviews } from "@/components/Reviews";
import { WhyWoolfsheds } from "@/components/WhyWoolfsheds";

export function HomePage({ onInspect }: { onInspect: () => void }) {
  return (
    <>
      <Hero />
      <PromiseStrip />
      <Products />
      <WhyWoolfsheds onInspect={onInspect} />
      <Reviews />
      <CallToAction onInspect={onInspect} />
      <Location />
    </>
  );
}
