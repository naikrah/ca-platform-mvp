export default function TopNav({ title, subtitle }) {
  return (
    <header
      style={{
        padding: "1.5rem 1.5rem 1rem",
        borderBottom: "1px solid #e2e8f0"
      }}
    >
      <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>{subtitle}</p>
      <h1 style={{ margin: "0.25rem 0 0", fontSize: "1.5rem" }}>{title}</h1>
    </header>
  );
}
