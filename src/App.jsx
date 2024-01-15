// App.js

import React from "react";
import { ThemeProvider } from "styled-components";
import SimulateCredit from "./components/SimulateCredit";

const theme = {
  primary: "#053f6a",
  primaryDark: "#00355d",
  primaryAccent: "#084f85",
  secondary: "#16ac8f",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SimulateCredit />
    </ThemeProvider>
  );
};

export default App;
