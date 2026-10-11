import { Star } from "lucide-react";

export function Stars() {
  return (
    <span className="stars" role="img" aria-label="Five stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} aria-hidden="true" />
      ))}
    </span>
  );
}
