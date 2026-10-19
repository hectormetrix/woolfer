import { useEffect, useState, type ComponentType } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InspectionDialog } from "@/components/InspectionDialog";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BarnPage } from "@/pages/Barn";
import { CarportsPage } from "@/pages/Carports";
import { ClubPage } from "@/pages/Club";
import { GablePage } from "@/pages/Gable";
import { GaragesPage } from "@/pages/Garages";
import { HipPage } from "@/pages/Hip";
import { HomePage } from "@/pages/Home";
import { OverhangPage } from "@/pages/Overhang";
import { PatioCoversPage } from "@/pages/PatioCovers";
import { ShedsPage } from "@/pages/Sheds";
import { ViewPage } from "@/pages/View";

type PageProps = { onInspect: () => void };

const pages: Record<string, { component: ComponentType<PageProps>; product: string }> = {
  "/": { component: HomePage, product: "Sheds" },
  "/sheds": { component: ShedsPage, product: "Sheds" },
  "/garages": { component: GaragesPage, product: "Garages" },
  "/patio-covers": { component: PatioCoversPage, product: "Patio Covers" },
  "/carports": { component: CarportsPage, product: "Carports" },
  "/carport": { component: CarportsPage, product: "Carports" },
  "/barn": { component: BarnPage, product: "Sheds" },
  "/gable": { component: GablePage, product: "Sheds" },
  "/overhang": { component: OverhangPage, product: "Sheds" },
  "/club": { component: ClubPage, product: "Sheds" },
  "/hip": { component: HipPage, product: "Sheds" },
  "/view": { component: ViewPage, product: "Sheds" },
};

function normalizePathname(pathname = typeof window === "undefined" ? "/" : window.location.pathname) {
  const cleanPath = pathname.split(/[?#]/, 1)[0].replace(/\/+$/, "") || "/";
  return cleanPath.toLowerCase();
}

export default function App() {
  const [inspectionOpen, setInspectionOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Sheds");
  const pathname = normalizePathname();
  const page = pages[pathname] ?? pages["/"];
  const Page = page.component;

  useScrollReveal();

  useEffect(() => {
    setSelectedProduct(page.product);
  }, [page.product]);

  /** Opens the free site inspection form, pre-set to a product. */
  const openInspection = (product = page.product) => {
    setSelectedProduct(product);
    setInspectionOpen(true);
  };

  return (
    <>
      <Header onInspect={() => openInspection(page.product)} />
      <main>
        <Page onInspect={() => openInspection(page.product)} />
      </main>
      <Footer onInspect={() => openInspection(page.product)} />

      <InspectionDialog
        open={inspectionOpen}
        onOpenChange={setInspectionOpen}
        product={selectedProduct}
      />
    </>
  );
}
