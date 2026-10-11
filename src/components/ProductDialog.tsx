import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { Product } from "@/data/site";

export function ProductDialog({
  product,
  onClose,
  onInspect,
}: {
  product: Product | null;
  onClose: () => void;
  onInspect: (productName: string) => void;
}) {
  return (
    <Dialog
      open={product !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="product-dialog">
        {product && (
          <>
            <DialogTitle>Custom {product.name}</DialogTitle>
            <img
              src={product.image}
              alt={product.name}
              className="product-dialog-image"
              width="1280"
              height="960"
            />
            <DialogDescription>{product.detail}</DialogDescription>
            <p className="product-dialog-price">
              Starting at <strong>{product.price}</strong>
              <span>{product.note}</span>
            </p>
            <Button className="rock-button" onClick={() => onInspect(product.name)}>
              Let’s build your {product.name.toLowerCase()} <ArrowUpRight />
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
