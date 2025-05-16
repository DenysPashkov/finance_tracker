import { useEffect, type CSSProperties } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { FinanceRow } from "../components/home main components/FinanceRow";
import { ExpensesRow } from "../components/home main components/ExpensesRow";
import { HistoryCell } from "../components/cells/HistoryCell";

import { initializeApp } from "firebase/app";

export default function Home() {
  const contentCSS: CSSProperties = {
    flex: 1,
    backgroundColor: "lightgray",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    minWidth: "700px",
    color: "black",
  };

  const bodyCSS: CSSProperties = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };

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
