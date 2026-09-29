import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Portfolio.css";

function Home() {
  return (
    <div className="page">
      <h1>Hi, I'm Adlin Febi 👋</h1>

      <h2>Cyber Security Student</h2>

      <p>
        Welcome to my personal portfolio. I am interested in
        web development and cyber security.
      </p>

      <Link to="/about" className="button">
        Know More
      </Link>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Me</h1>

      <p>
        I am a II Year B.E Cyber Security student.
        I enjoy learning programming, web development,
        and cyber security concepts.
      </p>

      <div className="info">
        <p><strong>Name:</strong> Adlin Febi</p>
        <p><strong>Department:</strong> B.E Cyber Security</p>
        <p><strong>Year:</strong> II Year</p>
        <p><strong>Skills:</strong> Java, Python, React, HTML, CSS</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Me</h1>

      <div className="contact-box">
        <p>📧 Email: adlin@example.com</p>
        <p>📱 Phone: +91 98765 43210</p>
        <p>📍 Location: Tamil Nadu, India</p>
      </div>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

function Portfolio() {
  return (
    <BrowserRouter>

      {/* Navigation */}
      <nav className="navbar">

        <h2>My Portfolio</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </nav>

      {/* Pages */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default Portfolio;