import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { InspectionRequest } from "@/components/InspectionRequest";

export function InspectionDialog({
  open,
  onOpenChange,
  product,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="inspection-dialog">
        <DialogTitle>Let’s build something great.</DialogTitle>
        <DialogDescription>
          Request your free site inspection. No pressure. Just possibilities.
        </DialogDescription>
        <InspectionRequest key={product} initialProduct={product} />
      </DialogContent>
    </Dialog>
  );
}
