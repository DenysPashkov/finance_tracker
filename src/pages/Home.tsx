import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { CSSProperties } from "react";

export default function Home() {
  const cellCSS: CSSProperties = {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "15px",
  };

  const contentCSS: CSSProperties = {
    flex: 1,
    backgroundColor: "gray",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "700px",
  };

  const bodyCSS: CSSProperties = {
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
  };

  function FinanceRow() {
    return (
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <MainFinances />
        <PatrimonyCell />
      </div>
    );
  }

  function MainFinances() {
    return (
      <div
        style={{
          flex: 2,
          ...cellCSS,
        }}
      >
        <h2>Finanze</h2>
        <p>Money</p>
        <p>dots</p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-evenly",
          }}
        >
          <p>add</p>
          <p>rem</p>
          <p>send?</p>
        </div>
      </div>
    );
  }

  function PatrimonyCell() {
    return (
      <div style={{ flex: 1, ...cellCSS }}>
        <h2>Patrimonio</h2>
        <p>riga 1</p>
        <p>riga 2</p>
        <p>riga 3</p>
        <p>more</p>
      </div>
    );
  }

  function HistoryCell() {
    return (
      <div style={cellCSS}>
        <h2>Storio</h2>
        <p>spesa 1</p>
        <p>spesa 2</p>
        <p>spesa 3</p>
        <p>more</p>
      </div>
    );
  }

  function ExpensesRow() {
    return (
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <ScheduledExpences />
        <MontlyExpenceCell />
      </div>
    );
  }

  function ScheduledExpences() {
    return (
      <div style={{ flex: 1, ...cellCSS }}>
        <h2>pagamenti programmati</h2>
        <p>riga 1</p>
        <p>riga 2</p>
        <p>riga 3</p>
        <p>more</p>
      </div>
    );
  }

  function MontlyExpenceCell() {
    return (
      <div
        style={{
          flex: 1,
          ...cellCSS,
        }}
      >
        <h2>Spese mensili</h2>
        <p>graph</p>
        <p>money used</p>
      </div>
    );
  }

  return (
    <>
      <div style={bodyCSS}>
        <Header />
        <div style={contentCSS}>
          <FinanceRow />
          <HistoryCell />
          <ExpensesRow />
        </div>
        <Footer />
      </div>
    </>
  );
}
