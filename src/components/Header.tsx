import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";
import { useEffect } from "react";

export function Header() {
  return (
    <header
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <p>Logo</p>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <p>home</p>
        <p>history</p>
        <p>light-dark-Mode</p>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log("@@@@@", credentialResponse);
          }}
          onError={() => {
            console.log("@@@@@@@@ Login Failed");
          }}
        />
      </div>
    </header>
  );
}
