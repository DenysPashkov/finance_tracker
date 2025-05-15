import { MainFinances } from "../components/cells/MainFinances";
import { PatrimonyCell } from "../components/cells/PatrimonyCell";

export function FinanceRow() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <MainFinances />
      <PatrimonyCell />
    </div>
  );
}
