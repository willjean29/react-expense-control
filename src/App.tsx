import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ExpensiveControlIndex from "./app/expensive-control/ExpensiveControlIndex";
import { createContext, useState } from "react";
import { Dark, Light } from "./styles/themes";
import { AuthContextProvider } from "./context/AuthContext";
export const ThemeContext = createContext({});
function App() {
  const [theme, setTheme] = useState("light");
  const themeStyled = theme === "light" ? Light : Dark;
  return (
    <>
      <ThemeContext.Provider value={{ setTheme }}>
        <ThemeProvider theme={themeStyled}>
          <AuthContextProvider>
            <BrowserRouter>
              <ExpensiveControlIndex />
            </BrowserRouter>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
