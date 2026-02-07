import InfoCard from "../components/InfoCard.jsx";
import TopNav from "../components/TopNav.jsx";

export default function BookingFlow() {
  return (
    <div>
      <TopNav title="Book a CA" subtitle="Service → CA → Time" />
      <main style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
        <InfoCard title="Select service" body="Tax Filing · GST · Audit · Advisory" />
        <InfoCard title="Choose a CA" body="Verified specialists with ratings and reviews." />
        <InfoCard title="Pick a time slot" body="Calendar view with available slots." />
        <InfoCard title="Confirm booking" body="₹4,500 · Instant confirmation" />
      </main>
    </div>
  );
}
