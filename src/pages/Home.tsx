import { useEffect, type CSSProperties } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { FinanceRow } from "./FinanceRow";
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
  };

  const bodyCSS: CSSProperties = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const firebaseConfig = {
    apiKey: "AIzaSyA6irwVSd5U54ZxLp9tzc_8xx15yPNG9fY",
    authDomain: "financestracker-denyspashkov.firebaseapp.com",
    projectId: "financestracker-denyspashkov",
    storageBucket: "financestracker-denyspashkov.firebasestorage.app",
    messagingSenderId: "351184893042",
    appId: "1:351184893042:web:11065aff898d63b0973eeb",
  };

  // Initialize Firebase
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
  }, []);

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
