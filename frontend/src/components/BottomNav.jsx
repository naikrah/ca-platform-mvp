import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#0f172a" : "#64748b",
  textDecoration: "none",
  fontWeight: isActive ? 600 : 500
});

export default function BottomNav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "0.75rem 1rem",
        borderTop: "1px solid #e2e8f0",
        background: "#fff",
        position: "sticky",
        bottom: 0
      }}
    >
      <NavLink to="/client" style={linkStyle}>
        Client
      </NavLink>
      <NavLink to="/book" style={linkStyle}>
        Book
      </NavLink>
      <NavLink to="/documents" style={linkStyle}>
        Documents
      </NavLink>
      <NavLink to="/ca" style={linkStyle}>
        CA
      </NavLink>
    </nav>
  );
}
