import InfoCard from "../components/InfoCard.jsx";
import TopNav from "../components/TopNav.jsx";

export default function Onboarding() {
  return (
    <div>
      <TopNav title="Get started" subtitle="Client & CA onboarding" />
      <main style={{ padding: "1.5rem", display: "grid", gap: "1rem" }}>
        <InfoCard
          title="Create an account"
          body="Select your role, provide basic details, and verify your email to continue."
        />
        <InfoCard
          title="KYC & documents"
          body="CA onboarding captures ICAI registration and PAN. Clients can add GSTIN later."
        />
        <InfoCard
          title="Secure access"
          body="JWT-based sessions with role-based access for bookings, documents, and payments."
        />
      </main>
    </div>
  );
}
