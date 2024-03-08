import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "../../shared/routes/ProtectedRoute";
import { useAuthContext } from "../../context/AuthContext";

const ExpensiveControlIndex = () => {
  const context = useAuthContext();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute user={context.user!} redirectTo="/login">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
};

export default ExpensiveControlIndex;
