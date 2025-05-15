import { cellCSS } from "./cellsCSS";

export function MainFinances() {
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
