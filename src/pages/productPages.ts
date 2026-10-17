import { FileCheck2, Home, Ruler, ShieldCheck, Sun, Wrench } from "lucide-react";
import { products, type Product } from "@/data/site";
import type { ProductPageContent } from "@/pages/ProductPage";

function getProduct(name: string): Product {
  const product = products.find((item) => item.name === name);
  if (!product) throw new Error(`Product page is missing product data for "${name}".`);
  return product;
}

export const shedsPage: Omit<ProductPageContent, "onInspect"> = {
  product: getProduct("Sheds"),
  kicker: "Custom built in San Antonio",
  headline: ["Make room.", "Make it yours."],
  script: "Built your way.",
  copy: "A custom shed built onsite to give your ideas, hobbies, and everyday essentials a place of their own.",
  detailsEyebrow: "A little more room changes everything",
  detailsHeadline: ["Space for your plans.", "Built for your place."],
  detailsCopy:
    "From practical storage to a backyard retreat, we’ll help you choose a shed style and layout that fits your property and the way you want to use it.",
  features: [
    {
      title: "Room to do more",
      text: "Create organized storage, a backyard gym, a home office, an art studio, or whatever you need next.",
      icon: Home,
    },
    {
      title: "Designed around you",
      text: "Choose a style, size, and details that work with your yard and make the space feel like yours.",
      icon: Ruler,
    },
    {
      title: "Built onsite",
      text: "Your shed is built right on your property with fiber cement siding and a limited warranty.",
      icon: ShieldCheck,
    },
  ],
  buildEyebrow: "From idea to your backyard",
  buildHeadline: ["A useful space.", "A personal touch."],
  buildCopy:
    "Start with what you want to make room for. We’ll help you explore utility and specialty shed styles, plan the right fit, and build it onsite for your property.",
  imageAlt: "A custom shed built for a San Antonio backyard",
};

export const garagesPage: Omit<ProductPageContent, "onInspect"> = {
  product: getProduct("Garages"),
  kicker: "Custom built in San Antonio",
  headline: ["Protect what", "moves you."],
  script: "Built your way.",
  copy: "A custom garage planned around your vehicles, your property, and the look of your home.",
  detailsEyebrow: "A better fit for home",
  detailsHeadline: ["Bring it all", "under one roof."],
  detailsCopy:
    "Whether you need room for a vehicle, tools, or a little extra breathing room, we’ll help plan a garage that works for your property and your day-to-day.",
  features: [
    {
      title: "Planned for your property",
      text: "Shape the size and layout around your vehicles, access points, storage, and available space.",
      icon: Ruler,
    },
    {
      title: "Concrete slab included",
      text: "Starting garage pricing includes the concrete slab, with custom options available.",
      icon: Home,
    },
    {
      title: "Help with the details",
      text: "Our team handles engineering plans and permits to help keep your project moving.",
      icon: FileCheck2,
    },
  ],
  buildEyebrow: "One experienced team",
  buildHeadline: ["From the plans", "to the parking."],
  buildCopy:
    "Tell us what you need to protect and how you want to use the space. We’ll talk through the site, plans, and options, then build a garage that feels right at home.",
  imageAlt: "A custom garage built for a San Antonio property",
};

export const patioCoversPage: Omit<ProductPageContent, "onInspect"> = {
  product: getProduct("Patio Covers"),
  kicker: "Custom built in San Antonio",
  headline: ["Find your shade.", "Stay awhile."],
  script: "Built your way.",
  copy: "Make more of your backyard with a custom patio cover designed for your home and the Texas sun.",
  detailsEyebrow: "Make the outdoors your favorite room",
  detailsHeadline: ["More shade.", "More time outside."],
  detailsCopy:
    "Create a comfortable place to gather, relax, and enjoy your backyard. We’ll shape a patio cover around your home, your space, and how you like to spend time outdoors.",
  features: [
    {
      title: "Made for your space",
      text: "Plan a patio cover to complement your home and make the most of your outdoor area.",
      icon: Ruler,
    },
    {
      title: "Ready for Texas days",
      text: "Add a welcome break from the sun and make your patio more comfortable through the seasons.",
      icon: Sun,
    },
    {
      title: "Built with care",
      text: "Substantial cedar posts, proper fastening, and a limited warranty are part of the build.",
      icon: Wrench,
    },
  ],
  buildEyebrow: "A straightforward process",
  buildHeadline: ["Your backyard.", "Your new favorite."],
  buildCopy:
    "We’ll talk through your patio, what you want from the space, and the details that bring it together. Our team handles the build and necessary permits, so you can look forward to more time outside.",
  imageAlt: "A custom patio cover built for a San Antonio home",
};
