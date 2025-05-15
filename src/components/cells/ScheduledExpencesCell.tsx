import { CellContent } from "../CellContent";
import { cellCSS } from "./cellsCSS";

export function ScheduledExpencesCell() {
  return (
    <div style={{ flex: 1, ...cellCSS }}>
      <h2>pagamenti programmati</h2>
      <CellContent>
        <ScheduledExpencesRow name={"Netflix"} value={20} />
        <ScheduledExpencesRow name={"Amazon video prime"} value={1.99} />
        <ScheduledExpencesRow name={"Affitto"} value={600} />
      </CellContent>
    </div>
  );

  function ScheduledExpencesRow({
    name,
    value,
  }: {
    name: string;
    value: number;
  }) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: "10px",
        }}
      >
        <h4>{name}</h4>
        <h4>{value.toFixed(2)} $</h4>
      </div>
    );
  }
}
