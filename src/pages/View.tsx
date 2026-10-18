import { ShedStylePage } from "@/pages/ShedStylePage";
import { shedStyles } from "@/data/shedStyles";

const style = shedStyles.find((shedStyle) => shedStyle.slug === "view")!;

export function ViewPage({ onInspect }: { onInspect: () => void }) {
  return <ShedStylePage style={style} onInspect={onInspect} />;
}
