import BookingFlow from "./pages/BookingFlow.jsx";
import CaDashboard from "./pages/CaDashboard.jsx";
import ClientDashboard from "./pages/ClientDashboard.jsx";
import DocumentCenter from "./pages/DocumentCenter.jsx";
import Login from "./pages/Login.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import BottomNav from "./components/BottomNav.jsx";
import TopNav from "./components/TopNav.jsx";

const App = () => {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", padding: "24px" }}>
      <TopNav />
      <main style={{ display: "grid", gap: "16px" }}>
        <Login />
        <Onboarding />
        <ClientDashboard />
        <CaDashboard />
        <DocumentCenter />
        <BookingFlow />
      </main>
      <BottomNav />
    </div>
  );
};

export default App;
