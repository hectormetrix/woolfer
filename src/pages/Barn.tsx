import { ShedStylePage } from "@/pages/ShedStylePage";
import { shedStyles } from "@/data/shedStyles";

const style = shedStyles.find((shedStyle) => shedStyle.slug === "barn")!;

export function BarnPage({ onInspect }: { onInspect: () => void }) {
  return <ShedStylePage style={style} onInspect={onInspect} />;
}
