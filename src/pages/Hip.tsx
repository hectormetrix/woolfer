import { ShedStylePage } from "@/pages/ShedStylePage";
import { shedStyles } from "@/data/shedStyles";

const style = shedStyles.find((shedStyle) => shedStyle.slug === "hip")!;

export function HipPage({ onInspect }: { onInspect: () => void }) {
  return <ShedStylePage style={style} onInspect={onInspect} />;
}
