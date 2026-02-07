const TopNav = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 style={{ margin: 0 }}>CA Platform</h1>
      <button type="button" style={{ padding: "8px 12px" }}>
        Log out
      </button>
    </header>
  );
};

export default TopNav;
