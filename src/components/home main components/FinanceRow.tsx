import { useEffect, useState } from "react";
import { MainFinances } from "../cells/MainFinances";
import { PatrimonyCell } from "../cells/PatrimonyCell";
import { useApp } from "../Contexts/UserContext";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { FirebaseManager } from "../Managers/FirebaseManager";

export function FinanceRow() {
  const { app } = useApp();
  const [data, setData] = useState<{ name: string; value: number }[]>([
    {
      name: "",
      value: 0,
    },
  ]);

  useEffect(() => {
    new FirebaseManager().fetchBilancio({ app }).then((data) => {
      setData(data);
    });
  }, [app]);

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <MainFinances data={data} />
      <PatrimonyCell data={data} />
    </div>
  );
}
