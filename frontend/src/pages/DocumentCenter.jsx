import InfoCard from "../components/InfoCard.jsx";
import TopNav from "../components/TopNav.jsx";

export default function DocumentCenter() {
  return (
    <div>
      <TopNav title="Documents" subtitle="Upload and share securely" />
      <main style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
        <InfoCard title="Upload" body="Drag and drop files or browse from device." />
        <InfoCard title="Recent files" body="ITR-2024.pdf · Shared with CA" />
        <InfoCard title="Activity log" body="You uploaded GST invoices (today)" />
      </main>
    </div>
  );
}
