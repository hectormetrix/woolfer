import { ShedStylePage } from "@/pages/ShedStylePage";
import { shedStyles } from "@/data/shedStyles";

const style = shedStyles.find((shedStyle) => shedStyle.slug === "club")!;

export function ClubPage({ onInspect }: { onInspect: () => void }) {
  return <ShedStylePage style={style} onInspect={onInspect} />;
}
