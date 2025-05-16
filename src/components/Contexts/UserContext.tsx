import { initializeApp, type FirebaseApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";

// Define the context type
interface UserContextType {
  app: FirebaseApp | null;
  setApp: React.Dispatch<React.SetStateAction<FirebaseApp | null>>;
}

// Create the context with a default value of null
const UserContext = createContext<UserContextType | null>(null);

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA6irwVSd5U54ZxLp9tzc_8xx15yPNG9fY",
  authDomain: "financestracker-denyspashkov.firebaseapp.com",
  projectId: "financestracker-denyspashkov",
  storageBucket: "financestracker-denyspashkov.firebasestorage.app",
  messagingSenderId: "351184893042",
  appId: "1:351184893042:web:11065aff898d63b0973eeb",
};

// Provider component
export const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [app, setApp] = useState<FirebaseApp | null>(null);

  // Initialize Firebase only once using useEffect
  useEffect(() => {
    if (!app) {
      const firebaseApp = initializeApp(firebaseConfig);
      setApp(firebaseApp); // Set the initialized app to state
    }
  }, [app]); // Dependency on `app` ensures it runs once and won't reinitialize

  return (
    <UserContext.Provider value={{ app, setApp }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to consume the UserContext
export const useApp = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useApp must be used within a UserProvider");
  }

  return context;
};
