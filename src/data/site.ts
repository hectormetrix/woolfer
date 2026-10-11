import shed from "@/assets/shed.jpg";
import garage from "@/assets/garage.jpg";
import patio from "@/assets/patio.jpg";
import carport from "@/assets/carport.jpg";

/* Everything a non-developer is likely to change lives in this file. */

export const site = {
  /** Save the logo file as public/logo.png */
  logo: "/logo.png",
  phoneHref: "tel:2106817433",
  phoneShort: "(210) 681-SHED",
  phoneFull: "(210) 681-SHED (7433)",
  email: "sales@woolfsheds.com",
  addressLine1: "6018 Exchange Parkway",
  addressLine2: "San Antonio, TX 78238",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.15490576551!2d-98.6073162!3d29.482678300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5dc65599587b%3A0x5f54018479ef814c!2sJ.%20B.%20Woolf%20Custom%20Sheds%20%26%20Garages!5e0!3m2!1sen!2sus!4v1791682939176!5m2!1sen!2sus",
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=J.B.+Woolf+Custom+Sheds+and+Garages+6018+Exchange+Parkway+San+Antonio",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=6018+Exchange+Parkway+San+Antonio+TX+78238",
};

export const hours = [
  { days: "Mon – Fri", time: "9:00am – 6:00pm" },
  { days: "Saturday", time: "10:00am – 4:00pm" },
  { days: "Sunday", time: "Closed" },
];

export const navLinks = [
  { label: "Our products", id: "products" },
  { label: "Why Woolfsheds", id: "why-woolfsheds" },
  { label: "Reviews", id: "reviews" },
  { label: "Visit us", id: "visit" },
];

export type Product = {
  name: string;
  image: string;
  price: string;
  description: string;
  note: string;
  detail: string;
};

export const products: Product[] = [
  {
    name: "Sheds",
    image: shed,
    price: "$3,099",
    description: "Storage. Backyard gym. Home office. Art studio. You call it. We build it.",
    note: "Specialty sheds from $5,700",
    detail:
      "Choose a barn, gable, or overhang utility shed, or explore our Club, Hip, and View specialty styles. Every shed is custom built onsite with fiber cement siding and a limited warranty.",
  },
  {
    name: "Garages",
    image: garage,
    price: "$12,000",
    description: "Room for your ride. Built to protect your vehicles and match your home.",
    note: "Concrete slab included",
    detail:
      "A garage built around your vehicles, your property, and your home. Starting pricing includes the concrete slab. We handle engineering plans and permits, with custom options available.",
  },
  {
    name: "Patio Covers",
    image: patio,
    price: "$4,800",
    description: "More good times. Less Texas sun. Make the outdoors your favorite room.",
    note: "Custom built for your space",
    detail:
      "Create a gathering place outside with a custom patio cover and substantial cedar posts. Our team handles the details, from proper fastening to necessary permits. Limited warranty included.",
  },
  {
    name: "Carports",
    image: carport,
    price: "$4,800",
    description: "Serious protection. Standout curb appeal. Give your vehicles a little shade.",
    note: "Cedar posts. Built to last.",
    detail:
      "Protect your vehicles with a carport designed for your home and property. Cedar posts, quality construction, and a limited warranty come together in a fully customizable structure.",
  },
];

export const promises = [
  "Veteran owned & operated",
  "Built onsite. Not off a lot.",
  "Limited warranty included",
  "100+ positive reviews",
];

export const reasons = [
  {
    title: "Custom means custom.",
    text: "Your size. Your style. Your space. Designed around you.",
  },
  {
    title: "We handle the details.",
    text: "Permits and engineering plans. One experienced team.",
  },
  {
    title: "Tough from the outside in.",
    text: "Fiber cement siding with a 30-year siding warranty. Limited warranty on every structure.",
  },
];

/* Illustrative until real customer reviews are supplied. */
export const reviews = [
  {
    text: "“A backyard office that feels like it belongs to our home. Exactly the space we had in mind.”",
    type: "A space of your own",
  },
  {
    text: "“From the plans to the finished garage, having one team handle it all made the difference.”",
    type: "One team. Start to finish.",
  },
  {
    text: "“Our patio is finally the place everyone wants to hang out. Ready for more Texas evenings.”",
    type: "More backyard living",
  },
];
