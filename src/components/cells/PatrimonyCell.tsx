import { CellContent } from "../CellContent";
import { ShowMoreRow } from "../ShowMoreRow";
import { cellCSS } from "./cellsCSS";

export function PatrimonyCell() {
  return (
    <div style={{ flex: 2, ...cellCSS }}>
      <h2>Patrimonio</h2>
      <CellContent>
        <PatrimonyRow title="Liquidi" value={20} />
        <PatrimonyRow title="Investimenti" value={-20} />
        <PatrimonyRow title="Criptovalute" value={20} />
        <ShowMoreRow />
      </CellContent>
    </div>
  );

  function PatrimonyRow({ title, value }: { title: string; value: number }) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBlockEnd: "1px solid gray",
          paddingInline: "30px",
          backgroundColor:
            value >= 0 ? "rgba(0, 255, 17, 0.35)" : "rgba(255, 0, 0, 0.35)",
        }}
      >
        <h4>{title}</h4>{" "}
        <h5 style={{ color: value >= 0 ? "black" : "black" }}>{value}$</h5>
      </div>
    );
  }
}
