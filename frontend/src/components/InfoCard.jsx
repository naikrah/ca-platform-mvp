export default function InfoCard({ title, body, action }) {
  return (
    <section
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "1rem",
        background: "#fff",
        boxShadow: "0 1px 2px rgba(15, 23, 42, 0.08)"
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem" }}>{title}</h3>
      <p style={{ margin: 0, color: "#475569" }}>{body}</p>
      {action ? <div style={{ marginTop: "0.75rem" }}>{action}</div> : null}
    </section>
  );
}
