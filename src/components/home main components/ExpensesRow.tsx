import { MontlyExpenceCell } from "../cells/MontlyExpenceCell";
import { ScheduledExpencesCell } from "../cells/ScheduledExpencesCell";

export function ExpensesRow() {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <ScheduledExpencesCell />
      <MontlyExpenceCell />
    </div>
  );
}
