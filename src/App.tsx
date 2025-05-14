import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p>Header</p>
          <p>light-dark-Mode</p>
        </header>
        <div style={{ flex: 1, backgroundColor: "gray" }}>
          <div style={{ backgroundColor: "green", padding: "10px" }}>
            <p style={{ margin: 0 }}>navigation bar</p>
          </div>
          <p>content</p>
        </div>
        <footer style={{ backgroundColor: "lightblue", padding: "20px" }}>
          Footer
        </footer>
      </div>
    </>
  );
}

export default App;
