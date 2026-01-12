import "./App.css";
import React from "react";
import Route from "./Routes";
import CookieConsent from "./components/CookiesConsent";

function App() {
  return (
    <React.Fragment>
      <CookieConsent />
      <Route />
    </React.Fragment>
  );
}

export default App;
