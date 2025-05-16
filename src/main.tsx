import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./components/Contexts/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="831832091288-bdmfltu5pjd427v2gbavjm8h1bgm2p4q.apps.googleusercontent.com">
    <UserProvider>
      <StrictMode>
        <Home />
      </StrictMode>
    </UserProvider>
  </GoogleOAuthProvider>
);
