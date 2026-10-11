import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, site } from "@/data/site";

/**
 * Free site inspection form. Used in the hero and in the pop-up.
 *
 * For now it prepares an email in the visitor's own mail app and says so
 * plainly. Nothing is sent or stored. Replace `submitInspection` with a real
 * request when the backend is ready.
 */
export function InspectionRequest({ initialProduct = "Sheds" }: { initialProduct?: string }) {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);
  const [emailUrl, setEmailUrl] = useState<string | null>(null);

  function submitInspection(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Free site inspection — ${data.get("product")}`;
    const body = [
      "Free site inspection request",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Product: ${data.get("product")}`,
      `Site address: ${data.get("address")}`,
      `Requested date: ${data.get("date")}`,
      "",
      "Please contact me to confirm availability.",
    ].join("\n");
    setEmailUrl(
      `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  }

  if (emailUrl) {
    return (
      <div className="space-y-5">
        <p className="text-sm">
          Your request is ready to email. Send it to our team and we’ll contact you to confirm your
          inspection date.
        </p>
        <Button asChild className="rock-button w-full">
          <a href={emailUrl}>
            Open email & send request <Mail />
          </a>
        </Button>
        <p className="form-note">
          Nothing has been sent yet. No email app? Call (210) 681-7433 to schedule.
        </p>
        <Button variant="link" onClick={() => setEmailUrl(null)}>
          Back to request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submitInspection} className="space-y-5">
      <div className="form-grid">
        <label className="form-field">
          Your name
          <input name="name" autoComplete="name" required placeholder="Full name" />
        </label>
        <label className="form-field">
          Phone number
          <input name="phone" autoComplete="tel" type="tel" required placeholder="(210) 555-0123" />
        </label>
        <label className="form-field full">
          Email address
          <input
            name="email"
            autoComplete="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </label>
        <label className="form-field full">
          Property address
          <input
            name="address"
            autoComplete="street-address"
            required
            placeholder="Street address, city, ZIP"
          />
        </label>
        <label className="form-field">
          What are we building?
          <select
            name="product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            {products.map((p) => (
              <option key={p.name}>{p.name}</option>
            ))}
          </select>
        </label>
        <label className="form-field">
          Preferred inspection date
          <input name="date" type="date" required min={new Date().toLocaleDateString("en-CA")} />
        </label>
      </div>
      <Button type="submit" className="rock-button w-full">
        Prepare inspection request <ArrowUpRight />
      </Button>
      <p className="form-note">
        Your request will be prepared for your email app. Dates are subject to confirmation by our
        team.
      </p>
    </form>
  );
}
