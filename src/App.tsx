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
import { InspectionDialog } from "@/components/InspectionDialog";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BarnPage } from "@/pages/Barn";
import { CarportsPage } from "@/pages/Carports";
import { GaragesPage } from "@/pages/Garages";
import { PatioCoversPage } from "@/pages/PatioCovers";
import { ShedsPage } from "@/pages/Sheds";

export default function App() {
  const [inspectionOpen, setInspectionOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Sheds");
  const pathname = window.location.pathname.replace(/\/+$/, "").toLowerCase() || "/";
  const currentProduct =
    pathname === "/barn"
      ? "Barn"
      : pathname === "/carport" || pathname === "/carports"
      ? "Carports"
      : pathname === "/sheds"
        ? "Sheds"
        : pathname === "/garages"
          ? "Garages"
          : pathname === "/patio-covers"
            ? "Patio Covers"
            : null;
  const inspectionProduct = currentProduct === "Barn" ? "Sheds" : currentProduct ?? "Sheds";

  useScrollReveal();

  /** Opens the free site inspection form, pre-set to a product. */
  const openInspection = (product = "Sheds") => {
    setSelectedProduct(product);
    setInspectionOpen(true);
  };

  return (
    <>
      <Header onInspect={() => openInspection(inspectionProduct)} />
      <main>
        {currentProduct === "Barn" ? (
          <BarnPage onInspect={() => openInspection("Sheds")} />
        ) : currentProduct === "Carports" ? (
          <CarportsPage onInspect={() => openInspection("Carports")} />
        ) : currentProduct === "Sheds" ? (
          <ShedsPage onInspect={() => openInspection("Sheds")} />
        ) : currentProduct === "Garages" ? (
          <GaragesPage onInspect={() => openInspection("Garages")} />
        ) : currentProduct === "Patio Covers" ? (
          <PatioCoversPage onInspect={() => openInspection("Patio Covers")} />
        ) : (
          <>
            <Hero />
            <PromiseStrip />
            <Products />
            <WhyWoolfsheds onInspect={() => openInspection()} />
            <Reviews />
            <CallToAction onInspect={() => openInspection()} />
            <Location />
          </>
        )}
      </main>
      <Footer onInspect={() => openInspection(inspectionProduct)} />

      <InspectionDialog
        open={inspectionOpen}
        onOpenChange={setInspectionOpen}
        product={selectedProduct}
      />
    </>
  );
}
