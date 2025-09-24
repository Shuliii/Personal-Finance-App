import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import LoginPage from "./pages/Login/LoginPage";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/signup" element={<LoginPage />} /> */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
