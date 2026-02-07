const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export const apiClient = {
  async get(path) {
    const response = await fetch(`${API_BASE_URL}${path}`);
    return response.json();
  }
};
