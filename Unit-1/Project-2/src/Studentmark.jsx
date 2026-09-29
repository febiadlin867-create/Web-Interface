import React, { useState } from "react";
import "./StudentMark.css";

function StudentMark() {
    const [name, setName] = useState("Adlin Febi S");
    const [roll, setRoll] = useState("24CSY3003");
    const [mark, setMark] = useState("");
    const [grade, setGrade] = useState("");

    const displayProfile = () => {
        let m = parseInt(mark);

        if (isNaN(m) || m < 0) {
            m = 0;
        }

        if (m > 100) {
            m = 100;
        }

        let g;

        if (m >= 90) {
            g = "A+";
        } else if (m >= 80) {
            g = "A";
        } else if (m >= 70) {
            g = "B+";
        } else if (m >= 60) {
            g = "B";
        } else if (m >= 50) {
            g = "C";
        } else if (m >= 40) {
            g = "D";
        } else {
            g = "F";
        }

        setMark(m);
        setGrade(g);
    };

    return (
        <div className="page">

            <div className="student-card">

                <div className="avatar">
                    👩‍💻
                </div>

                <h1>Student Profile</h1>

                <div className="student-info">
                    <p>
                        <strong>Name:</strong> Adlin Febi S
                    </p>

                    <p>
                        <strong>Department:</strong> B.E Cyber Security
                    </p>

                    <p>
                        <strong>Register No:</strong> 24CSY3003
                    </p>
                </div>

                <div className="form-group">
                    <label>Full Name</label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>

                <div className="form-group">
                    <label>Register Number</label>

                    <input
                        type="text"
                        value={roll}
                        onChange={(e) => setRoll(e.target.value)}
                        placeholder="Enter register number"
                    />
                </div>

                <div className="form-group">
                    <label>Marks (Out of 100)</label>

                    <input
                        type="number"
                        value={mark}
                        onChange={(e) => setMark(e.target.value)}
                        placeholder="Enter marks"
                        min="0"
                        max="100"
                    />
                </div>

                <button onClick={displayProfile}>
                    📋 Show My Profile
                </button>

                <div className="profile-box">

                    <h2>📌 Student Summary</h2>

                    <div className="summary-row">
                        <span>Name</span>
                        <strong>{name || "—"}</strong>
                    </div>

                    <div className="summary-row">
                        <span>Register No.</span>
                        <strong>{roll || "—"}</strong>
                    </div>

                    <div className="summary-row">
                        <span>Department</span>
                        <strong>Cyber Security</strong>
                    </div>

                    <div className="summary-row">
                        <span>Marks</span>
                        <strong>{mark === "" ? "—" : mark}</strong>
                    </div>

                    <div className="summary-row">
                        <span>Grade</span>
                        <strong className="grade">
                            {grade || "—"}
                        </strong>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default StudentMark;
