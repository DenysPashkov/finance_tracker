import { useState } from "react";
import { cellCSS } from "./cellsCSS";

export function MainFinances() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const finances = [20, 53.2, 40000];

  const handlePrev = () => {
    setSelectedIndex((prev) => {
      if (prev == 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setSelectedIndex((prev) => {
      if (prev == finances.length - 1) {
        return prev;
      }
      return prev + 1;
    });
  };

  function Dot({ index }: { index: number }) {
    return (
      <button
        onClick={() => {
          setSelectedIndex(index);
        }}
        style={{
          height: "12px",
          width: "12px",
          borderRadius: "50%",
          backgroundColor: index == selectedIndex ? "lightblue" : "gray",
          padding: 0,
          outline: "none",
        }}
      ></button>
    );
  }

  return (
    <div
      style={{
        flex: 1,
        ...cellCSS,
      }}
    >
      <h2>Finanze</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <button
          style={{
            fontSize: "2rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0 10px",
            color: "#333", // or your theme color
            outline: "none",
          }}
          onClick={() => handlePrev()}
        >
          ←
        </button>

        <h1
          style={{
            textAlign: "center",
            color:
              "green" /* TODO: Manage the possibility to have a negative finance and change the color of the Text here */,
          }}
        >
          {finances[selectedIndex]} $
        </h1>

        <button
          style={{
            fontSize: "2rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0 10px",
            color: "#333",
            outline: "none",
          }}
          onClick={() => handleNext()}
        >
          →
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {finances.map((_, idx) => {
          return <Dot index={idx} />;
        })}
      </div>

      <p>dots</p>
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
