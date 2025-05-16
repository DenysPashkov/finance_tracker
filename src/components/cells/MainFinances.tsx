import { useState } from "react";
import { cellCSS } from "./cellsCSS";

export function MainFinances({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
      if (prev == data.length - 1) {
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
      <h2 style={{ textAlign: "center" }}>Finanze</h2>
      <h4> {data.length > 0 ? data[selectedIndex].name : ""}</h4>
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
          {data.length > 0 ? data[selectedIndex].value : 0} $
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
        {data.map((_, idx) => {
          return <Dot index={idx} />;
        })}
      </div>

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
