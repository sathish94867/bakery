import React from "react";

const UserDashboard = () => {
  return (
    <div>
      <h1>Welcome to the User Dashboard</h1>
      <button onClick={() => { localStorage.clear(); window.location.href = "/"; }}>Logout</button>
    </div>
  );
};

export default UserDashboard;
