import InfoCard from "../components/InfoCard.jsx";
import TopNav from "../components/TopNav.jsx";

export default function ClientDashboard() {
  return (
    <div>
      <TopNav title="Client dashboard" subtitle="Hello, Priya" />
      <main style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
        <InfoCard title="Book a CA" body="Browse verified CAs and book a slot in minutes." />
        <InfoCard title="Upcoming booking" body="GST filing with Arjun CA · Tue 10:30 AM" />
        <InfoCard title="Documents" body="2 files waiting for review by your CA." />
        <InfoCard title="Payments" body="₹4,500 pending for GST Filing" />
      </main>
    </div>
  );
}
