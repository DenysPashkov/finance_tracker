import type { FirebaseApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export class FirebaseManager {
  async fetchBilancio({
    app,
  }: {
    app: FirebaseApp | null;
  }): Promise<{ name: string; value: number }[]> {
    if (!app) {
      console.log("@@@ No Firebase app context");
      return [];
    }

    let db = getFirestore(app);
    const docRef = doc(db, "Finanze", "Bilancio");
    const parsedData = await getDoc(docRef)
      .then((docSnap) => {
        return docSnap.data() ?? {};
      })
      .then((data) => {
        const parsedData: { name: string; value: number }[] = [];
        if (data.available) {
          parsedData.push({ name: "Disponibili", value: data.available });
        }
        if (data.invested) {
          parsedData.push({ name: "Investimenti", value: data.invested });
        }
        if (data.savings) {
          parsedData.push({ name: "Salvadanaio", value: data.savings });
        }
        return parsedData;
      });
    return parsedData;
  }
}
