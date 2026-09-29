import React, { useState } from "react";
import "./dashboard.css";
import profile from "./assets/me.png";

function Dashboard() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dashboard dark" : "dashboard light"}>

      {/* Header */}
      <div className="header">
        <div>
          <h1>Student Dashboard</h1>
          <p>Welcome back, Adlin Febi S. 👋</p>
        </div>

        <button
          className="mode-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>


      {/* Student Profile */}
      <div className="profile-card">

        <div className="profile-image">
          <img src={profile} alt="Adlin Febi" />
        </div>

        <div className="profile-details">
          <h2>Adlin Febi S</h2>

          <p>
            <b>Register No:</b> 411625149001
          </p>

          <p>
            <b>Department:</b> B.E Cyber Security
          </p>

          <p>
            <b>Year:</b> II Year
          </p>

          <p>
            <b>Semester:</b> IV Semester
          </p>
        </div>

      </div>


      {/* Statistics */}
      <div className="stats">

        <div className="stat-card">
          <span className="icon">📚</span>
          <div>
            <h2>4</h2>
            <p>Subjects</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="icon">📊</span>
          <div>
            <h2>8.7</h2>
            <p>CGPA</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="icon">✅</span>
          <div>
            <h2>92%</h2>
            <p>Attendance</p>
          </div>
        </div>

        <div className="stat-card">
          <span className="icon">🎓</span>
          <div>
            <h2>Eligible</h2>
            <p>Exam Status</p>
          </div>
        </div>

      </div>


      {/* Bottom Section */}
      <div className="bottom-section">

        {/* Subject Performance */}
        <div className="subjects">

          <h2>Subject Performance</h2>

          <div className="subject">
            <div>
              <b>Data Structures</b>
              <small>24CS391</small>
            </div>
            <strong>85 <span>/ 100</span></strong>
          </div>

          <div className="subject">
            <div>
              <b>Database Management</b>
              <small>24CS392</small>
            </div>
            <strong>90 <span>/ 100</span></strong>
          </div>

          <div className="subject">
            <div>
              <b>Web Development</b>
              <small>24CS393</small>
            </div>
            <strong>88 <span>/ 100</span></strong>
          </div>

          <div className="subject">
            <div>
              <b>Software Engineering</b>
              <small>24CS394</small>
            </div>
            <strong>82 <span>/ 100</span></strong>
          </div>

        </div>


        {/* Attendance */}
        <div className="attendance">

          <h2>Attendance</h2>

          <div className="circle">
            <span>92%</span>
          </div>

          <p className="eligible">
            ✓ Examination Eligible
          </p>

          <div className="progress">
            <div></div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;