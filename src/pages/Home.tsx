import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { CSSProperties } from "react";

function Home() {
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
  };

  const bodyCSS: CSSProperties = {
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <div style={bodyCSS}>
        <Header />
        <div style={contentCSS}>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <div
              style={{
                flex: 2,
                ...cellCSS,
              }}
            >
              <p>Money</p>
              <p>dots</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <p>add</p>
                <p>rem</p>
                <p>send?</p>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                ...cellCSS,
              }}
            >
              <p>title</p>
              <p>graph</p>
              <p>money used</p>
            </div>
          </div>
          <div style={cellCSS}>
            <p>title storico</p>
            <p>spesa 1</p>
            <p>spesa 2</p>
            <p>spesa 3</p>
            <p>more</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <div style={{ flex: 1, ...cellCSS }}>
              <p>pagamenti programmato titolo</p>
              <p>riga 1</p>
              <p>riga 2</p>
              <p>riga 3</p>
              <p>more</p>
            </div>

            <div style={{ flex: 1, ...cellCSS }}>
              <p>divisione patrimonio titolo</p>
              <p>riga 1</p>
              <p>riga 2</p>
              <p>riga 3</p>
              <p>more</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
