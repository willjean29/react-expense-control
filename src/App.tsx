import { BrowserRouter } from "react-router-dom";
import ExpensiveControlIndex from "./app/expensive-control/ExpensiveControlIndex";

function App() {
  return (
    <>
      <BrowserRouter>
        <ExpensiveControlIndex />
      </BrowserRouter>
    </>
  );
}

export default App;
