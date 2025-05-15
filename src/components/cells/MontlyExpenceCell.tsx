import { MonthlySpendingLineChart } from "../MonthlySpendingLineChart";
import { cellCSS } from "./cellsCSS";

export function MontlyExpenceCell() {
  const tempData: number[] = [
    1,
    1 + Math.floor(Math.random() * 100),
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  for (let i = 2; i < 21; i++) {
    tempData[i] = tempData[i - 1] + Math.floor(Math.random() * 100);
  }
  return (
    <div
      style={{
        flex: 1,
        ...cellCSS,
      }}
    >
      <h2>Spese mensili</h2>
      <MonthlySpendingLineChart values={tempData} />
    </div>
  );
}
