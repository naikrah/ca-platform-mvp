import InfoCard from "../components/InfoCard.jsx";
import TopNav from "../components/TopNav.jsx";

export default function CaDashboard() {
  return (
    <div>
      <TopNav title="CA dashboard" subtitle="Good morning, Arjun" />
      <main style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
        <InfoCard title="Today’s bookings" body="3 confirmations · 1 pending approval" />
        <InfoCard title="Client portfolio" body="12 active clients · 4 GST filers" />
        <InfoCard title="Documents" body="5 uploads awaiting review" />
        <InfoCard title="Revenue" body="₹82,000 this month" />
      </main>
    </div>
  );
}
