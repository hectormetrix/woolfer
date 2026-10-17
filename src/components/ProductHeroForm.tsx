import { InspectionRequest } from "@/components/InspectionRequest";

export function ProductHeroForm({ product }: { product: string }) {
  return (
    <aside id="free-inspection" className="hero-form" aria-label="Free site inspection request">
      <div className="hero-form-head">
        <h2>Free site inspection</h2>
        <p>No pressure. Just possibilities.</p>
      </div>
      <div className="hero-form-body">
        <InspectionRequest initialProduct={product} />
      </div>
    </aside>
  );
}
