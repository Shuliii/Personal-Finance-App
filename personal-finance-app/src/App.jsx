import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navigate} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import Home from "./pages/Home/Home";
import Transactions from "./pages/Transactions/Transactions";
import Budget from "./pages/Budget/Budget";
import Pots from "./pages/Pots/Pots";
import RecurringBills from "./pages/RecurringBills/RecurringBills";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/pots" element={<Pots />} />
            <Route path="/recurringBills" element={<RecurringBills />} />

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
