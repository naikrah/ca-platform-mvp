import TopNav from "../components/TopNav.jsx";

export default function Login() {
  return (
    <div>
      <TopNav title="Login" subtitle="Welcome back" />
      <main style={{ padding: "1.5rem" }}>
        <form style={{ display: "grid", gap: "0.75rem", maxWidth: "420px" }}>
          <label>
            Email
            <input type="email" placeholder="you@example.com" style={{ width: "100%", padding: "0.6rem" }} />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" style={{ width: "100%", padding: "0.6rem" }} />
          </label>
          <button type="button" style={{ padding: "0.75rem", background: "#0f172a", color: "#fff" }}>
            Continue
          </button>
        </form>
      </main>
    </div>
  );
}
