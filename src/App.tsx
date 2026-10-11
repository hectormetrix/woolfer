import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PromiseStrip } from "@/components/PromiseStrip";
import { Products } from "@/components/Products";
import { WhyWoolfsheds } from "@/components/WhyWoolfsheds";
import { Reviews } from "@/components/Reviews";
import { CallToAction } from "@/components/CallToAction";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { ProductDialog } from "@/components/ProductDialog";
import { InspectionDialog } from "@/components/InspectionDialog";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { products } from "@/data/site";

export default function App() {
  const [inspectionOpen, setInspectionOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Sheds");
  const [detail, setDetail] = useState<number | null>(null);

  useScrollReveal();

  /** Opens the free site inspection form, pre-set to a product. */
  const openInspection = (product = "Sheds") => {
    setSelectedProduct(product);
    setDetail(null);
    setInspectionOpen(true);
  };

  return (
    <>
      <Header onInspect={() => openInspection()} />
      <main>
        <Hero />
        <PromiseStrip />
        <Products onExplore={setDetail} />
        <WhyWoolfsheds onInspect={() => openInspection()} />
        <Reviews />
        <CallToAction onInspect={() => openInspection()} />
        <Location />
      </main>
      <Footer onExplore={setDetail} onInspect={() => openInspection()} />

      <ProductDialog
        product={detail === null ? null : (products[detail] ?? null)}
        onClose={() => setDetail(null)}
        onInspect={openInspection}
      />
      <InspectionDialog
        open={inspectionOpen}
        onOpenChange={setInspectionOpen}
        product={selectedProduct}
      />
    </>
  );
}
