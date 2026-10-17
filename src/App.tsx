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
import { ShedStyles } from "@/components/ShedStyles";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CarportsPage } from "@/pages/Carports";
import { ProductPage } from "@/pages/ProductPage";
import { shedsPage, garagesPage, patioCoversPage } from "@/pages/productPages";

export default function App() {
  const [inspectionOpen, setInspectionOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Sheds");
  const pathname = window.location.pathname.replace(/\/+$/, "").toLowerCase() || "/";
  const currentProduct =
    pathname === "/carport" || pathname === "/carports"
      ? "Carports"
      : pathname === "/sheds"
        ? "Sheds"
        : pathname === "/garages"
          ? "Garages"
          : pathname === "/patio-covers"
            ? "Patio Covers"
            : null;

  useScrollReveal();

  /** Opens the free site inspection form, pre-set to a product. */
  const openInspection = (product = "Sheds") => {
    setSelectedProduct(product);
    setInspectionOpen(true);
  };

  return (
    <>
      <Header onInspect={() => openInspection(currentProduct ?? "Sheds")} />
      <main>
        {currentProduct === "Carports" ? (
          <CarportsPage onInspect={() => openInspection("Carports")} />
        ) : currentProduct === "Sheds" ? (
          <ProductPage {...shedsPage} onInspect={() => openInspection("Sheds")}>
            <ShedStyles image={shedsPage.product.image} />
          </ProductPage>
        ) : currentProduct === "Garages" ? (
          <ProductPage {...garagesPage} onInspect={() => openInspection("Garages")} />
        ) : currentProduct === "Patio Covers" ? (
          <ProductPage {...patioCoversPage} onInspect={() => openInspection("Patio Covers")} />
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
      <Footer onInspect={() => openInspection(currentProduct ?? "Sheds")} />

      <InspectionDialog
        open={inspectionOpen}
        onOpenChange={setInspectionOpen}
        product={selectedProduct}
      />
    </>
  );
}
