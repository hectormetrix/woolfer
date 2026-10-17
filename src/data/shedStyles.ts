import { Eye, Hammer, Home, Ruler, ShieldCheck, Warehouse, type LucideIcon } from "lucide-react";
import barn from "@/assets/woolf-barn.jpg";
import club from "@/assets/woolf-club.jpg";
import gable from "@/assets/woolf-gable.jpg";
import hip from "@/assets/woolf-hip.jpg";
import overhang from "@/assets/woolf-overhang.jpg";
import view from "@/assets/woolf-view.jpg";

type ShedBenefit = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type ShedStyle = {
  name: string;
  slug: string;
  image: string;
  category: "Utility" | "Specialty";
  description: string;
  heroLines: [string, string];
  heroCopy: string;
  detailsEyebrow: string;
  detailsLines: [string, string];
  detailsCopy: string;
  benefits: [ShedBenefit, ShedBenefit, ShedBenefit];
  buildEyebrow: string;
  buildLines: [string, string];
  buildCopy: string;
};

export const shedStyles: ShedStyle[] = [
  {
    name: "Barn",
    slug: "barn",
    image: barn,
    category: "Utility",
    description:
      "A familiar barn-inspired profile for a shed that feels right at home in the backyard.",
    heroLines: ["Barn style.", "Room to spare."],
    heroCopy:
      "A barn-inspired shed with a distinctive roofline, useful space, and details chosen for your property.",
    detailsEyebrow: "A familiar look, made for your backyard",
    detailsLines: ["Classic barn character.", "Space that works for you."],
    detailsCopy:
      "Make room for storage, projects, or hobbies in a barn-style shed planned around your property and the way you want to use it.",
    benefits: [
      {
        title: "A classic barn profile",
        text: "The distinctive gambrel roof brings familiar barn character to a practical backyard shed.",
        icon: Warehouse,
      },
      {
        title: "Room for your plans",
        text: "Create useful space for tools, seasonal storage, hobbies, and the things you want close at hand.",
        icon: Ruler,
      },
      {
        title: "Built onsite for you",
        text: "Choose the details that suit your property, then have your barn-style shed built right in your backyard.",
        icon: Hammer,
      },
    ],
    buildEyebrow: "From your idea to your backyard",
    buildLines: ["Make it yours.", "We’ll build it onsite."],
    buildCopy:
      "Tell us what you want to store or make room for. We’ll help plan a barn-style shed around your needs and property, then build it onsite with a limited warranty included.",
  },
  {
    name: "Gable",
    slug: "gable",
    image: gable,
    category: "Utility",
    description:
      "A classic peaked roofline with a straightforward look that suits many properties.",
    heroLines: ["A classic look.", "A little more room."],
    heroCopy:
      "A traditional gable roof and a practical layout make a versatile shed for storage, projects, and everyday plans.",
    detailsEyebrow: "A timeless backyard favorite",
    detailsLines: ["Simple, classic style.", "Made for your plans."],
    detailsCopy:
      "Get a useful, adaptable space with a familiar roofline. Plan the size and details to fit your yard and what you want to keep close.",
    benefits: [
      {
        title: "A timeless roofline",
        text: "The peaked gable roof brings a clean, familiar profile to your backyard.",
        icon: Home,
      },
      {
        title: "Flexible everyday space",
        text: "Make space for tools, lawn equipment, seasonal storage, or a favorite project.",
        icon: Ruler,
      },
      {
        title: "Built for your property",
        text: "Choose the size and details that work for your yard, then have it built onsite.",
        icon: Hammer,
      },
    ],
    buildEyebrow: "A straightforward way to add space",
    buildLines: ["Your yard.", "Your kind of shed."],
    buildCopy:
      "Share what you need the space for and we’ll help plan a gable shed around your property. Our team builds onsite and includes a limited warranty.",
  },
  {
    name: "Overhang",
    slug: "overhang",
    image: overhang,
    category: "Utility",
    description:
      "A roofline with added overhang for a distinctive profile and extra coverage at the edges.",
    heroLines: ["A little more", "roof to love."],
    heroCopy:
      "Add a distinctive touch to practical backyard storage with a shed style featuring an extended roofline.",
    detailsEyebrow: "A useful detail with standout style",
    detailsLines: ["Extra roofline.", "Extra character."],
    detailsCopy:
      "An overhang adds definition to the roofline and a little more coverage around the shed. Customize the rest to suit your space.",
    benefits: [
      {
        title: "Distinctive roof detail",
        text: "An extended roofline gives this utility shed a more finished, individual look.",
        icon: Home,
      },
      {
        title: "Useful backyard storage",
        text: "Keep tools, outdoor gear, and seasonal essentials organized and close at hand.",
        icon: Warehouse,
      },
      {
        title: "Sized for your space",
        text: "Plan the layout and details around your yard and how you’ll use the shed.",
        icon: Ruler,
      },
    ],
    buildEyebrow: "Thoughtful details, built onsite",
    buildLines: ["Make room.", "Make it yours."],
    buildCopy:
      "Tell us what you want to store and where the shed will go. We’ll help you plan an overhang style that fits your property, then build it onsite with a limited warranty.",
  },
  {
    name: "Club",
    slug: "club",
    image: club,
    category: "Specialty",
    description:
      "A refined backyard retreat with home-inspired details, ideal for an office, getaway, or premium storage.",
    heroLines: ["A backyard", "place of your own."],
    heroCopy:
      "Turn the Club into a welcoming backyard retreat, creative studio, home office, or polished storage space.",
    detailsEyebrow: "Room for something special",
    detailsLines: ["A little escape.", "A lot of possibility."],
    detailsCopy:
      "Give your plans a place of their own with a home-inspired shed style that can be shaped into a quiet workspace, studio, or getaway.",
    benefits: [
      {
        title: "Home-inspired character",
        text: "Distinctive details help this specialty shed feel like a natural extension of home.",
        icon: Home,
      },
      {
        title: "Space to focus",
        text: "Create a comfortable starting point for an office, art studio, hobby room, or retreat.",
        icon: Ruler,
      },
      {
        title: "Made for your backyard",
        text: "Plan the size and details around your property and the way you want to use the space.",
        icon: Hammer,
      },
    ],
    buildEyebrow: "Your idea, your backyard",
    buildLines: ["A space apart.", "Made for you."],
    buildCopy:
      "Bring us your idea for a backyard office, studio, or hideaway. We’ll help plan your Club shed for the property and build it onsite with a limited warranty.",
  },
  {
    name: "Hip",
    slug: "hip",
    image: hip,
    category: "Specialty",
    description:
      "A graceful roofline and durable construction create a versatile shed with added weather protection.",
    heroLines: ["Distinctive style.", "Everyday function."],
    heroCopy:
      "A graceful hip roof gives this versatile specialty shed an elegant profile for storage or a backyard retreat.",
    detailsEyebrow: "A refined profile for your backyard",
    detailsLines: ["Style from every side.", "Space for what matters."],
    detailsCopy:
      "The hip roof brings a distinctive look and an all-around finished feel. Make it a practical storage space, hobby room, or personal retreat.",
    benefits: [
      {
        title: "A graceful hip roof",
        text: "Sloping rooflines on every side create a distinctive, balanced profile.",
        icon: Home,
      },
      {
        title: "Versatile by design",
        text: "Use the space for organized storage, projects, hobbies, or a backyard getaway.",
        icon: Ruler,
      },
      {
        title: "Built onsite",
        text: "Choose details to complement your property and have your shed built right in your yard.",
        icon: Hammer,
      },
    ],
    buildEyebrow: "A personal touch from the start",
    buildLines: ["Good-looking.", "Hard-working."],
    buildCopy:
      "We’ll help you shape a hip-style shed around your goals and your property. Our team builds onsite and includes a limited warranty.",
  },
  {
    name: "View",
    slug: "view",
    image: view,
    category: "Specialty",
    description:
      "A bright, home-inspired retreat with wide views—perfect for an office, studio, or backyard escape.",
    heroLines: ["Bring in the light.", "Make room to think."],
    heroCopy:
      "Create a bright backyard workspace or creative retreat with a home-inspired shed built around your plans.",
    detailsEyebrow: "A brighter way to add space",
    detailsLines: ["A room with a view.", "Right in your backyard."],
    detailsCopy:
      "With wide views and a welcoming, home-inspired feel, the View makes a natural office, art studio, or peaceful place to recharge.",
    benefits: [
      {
        title: "Bright, open feel",
        text: "Wide windows bring natural light and a sense of connection to your backyard.",
        icon: Eye,
      },
      {
        title: "Space to create",
        text: "Set up a home office, studio, hobby space, or quiet getaway of your own.",
        icon: Ruler,
      },
      {
        title: "Made to feel at home",
        text: "Choose details that suit your property and make the space your own.",
        icon: Hammer,
      },
    ],
    buildEyebrow: "A little more room to see things differently",
    buildLines: ["Your own view.", "Your own space."],
    buildCopy:
      "Tell us what you’re dreaming up for your backyard. We’ll help plan your View shed to fit your property, then build it onsite with a limited warranty.",
  },
];
