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
    backgroundColor: "lightgray",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "700px",
  };

  const bodyCSS: CSSProperties = {
    height: "100%",
    width: "100%",
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
          flex: 1,
          ...cellCSS,
        }}
      >
        <h2>Finanze</h2>
        <h1
          style={{
            textAlign: "center",
            color:
              "green" /* TODO: Manage the possibility to have a negative finance and change the color of the Text here */,
          }}
        >
          20 $
        </h1>
        {/*TODO: Add dots in the future once we will have multiple finances <p>dots</p> */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-evenly",
          }}
        >
          <button>Aggiungi</button>
          <button>Preleva</button>
          <button>Trasferisci</button>
          <button>Investi</button>
        </div>
      </div>
    );
  }

  function ShowMoreRow() {
    return (
      <div
        style={{
          backgroundColor: "lightgray",
          padding: "10px",
        }}
      >
        <h4 style={{ margin: "0px", textAlign: "center" }}>Mostra di piu'</h4>
      </div>
    );
  }

  function CellContent({ children }: { children: React.ReactNode }) {
    return (
      <div
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "rgba(0,0,0,0.05)",
        }}
      >
        {children}
      </div>
    );
  }

  function PatrimonyCell() {
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
  }

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

  function HistoryCell() {
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
