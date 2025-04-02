import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <button onClick={() => { localStorage.clear(); window.location.href = "/"; }}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
