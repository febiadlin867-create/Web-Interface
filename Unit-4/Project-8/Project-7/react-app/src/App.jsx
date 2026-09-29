import React from "react";

function App() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <h2>Adlin Febi S</h2>
      <p>Cyber Security Student</p>

      <img
        src="/me.png"
        alt="Profile"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />
    </div>
  );
}

export default App;