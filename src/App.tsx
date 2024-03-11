import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import ExpensiveControlIndex from "./app/expensive-control/ExpensiveControlIndex";
import { createContext, useState } from "react";
import { Dark, Light } from "./styles/themes";
import { AuthContextProvider } from "./context/AuthContext";
import Sidebar from "./shared/components/organisms/sidebar/Sidebar";
import { Device } from "./styles/breakpoints";
import Drawer from "./shared/components/organisms/drawer/Drawer";
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
              <Container>
                <div className="content-sidebar">
                  <Sidebar />
                </div>
                <div className="content-drawer">
                  <Drawer />
                </div>
                <ContainerBody>
                  <ExpensiveControlIndex />
                </ContainerBody>
              </Container>
            </BrowserRouter>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  .content-sidebar {
    display: none;
  }
  .content-drawer {
    display: initial;
    position: absolute;
    left: 20px;
  }
  background-color: ${({ theme }) => theme.bgtotal};
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    .content-sidebar {
      display: initial;
    }
    .content-drawer {
      display: none;
    }
  }
`;

const ContainerBody = styled.div`
  background-color: red;
  width: 100%;
  @media ${Device.tablet} {
    grid-column: 2;
  }
`;

export default App;
