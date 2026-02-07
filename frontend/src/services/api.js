const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export const fetchHealth = async () => {
  const response = await fetch(`${API_BASE}/health`);
  if (!response.ok) {
    throw new Error("Failed to reach API");
  }
  return response.json();
};
