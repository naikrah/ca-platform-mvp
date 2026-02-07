import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav.jsx";
import BookingFlow from "./pages/BookingFlow.jsx";
import CaDashboard from "./pages/CaDashboard.jsx";
import ClientDashboard from "./pages/ClientDashboard.jsx";
import DocumentCenter from "./pages/DocumentCenter.jsx";
import Login from "./pages/Login.jsx";
import Onboarding from "./pages/Onboarding.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/ca" element={<CaDashboard />} />
          <Route path="/book" element={<BookingFlow />} />
          <Route path="/documents" element={<DocumentCenter />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
