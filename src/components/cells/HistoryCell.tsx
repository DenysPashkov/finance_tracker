import { CellContent } from "../CellContent";
import { ShowMoreRow } from "../ShowMoreRow";
import { cellCSS } from "./cellsCSS";

export function HistoryCell() {
  function HistoryRow({
    company,
    date,
    cost,
  }: {
    company: string;
    date: string;
    cost: number;
  }) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
          paddingInline: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "gray",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{ marginBlockEnd: "0px" }}>{company}</h3>
            <p
              style={{
                marginBlockStart: "0px",
                color: "grayText",
                fontSize: "8px",
              }}
            >
              {date}
            </p>
          </div>
        </div>
        <h3>{cost.toFixed(2)} $</h3>
      </div>
    );
  }

  return (
    <div style={cellCSS}>
      <h2>Storico</h2>
      <CellContent>
        <HistoryRow company="Amazon" date="15/05/2025" cost={24.99} />
        <HistoryRow company="Bar" date="15/05/2025" cost={3.5} />
        <HistoryRow company="Amazon" date="15/05/2025" cost={24.99} />
        <ShowMoreRow />
      </CellContent>
    </div>
  );
}
