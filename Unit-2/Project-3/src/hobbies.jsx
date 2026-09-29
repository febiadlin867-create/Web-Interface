import React from "react";
import "./hobbies.css";

function Hobbies() {
  return (
    <div className="hobbies">
      <h1>My Hobbies</h1>

      <div className="hobby-container">

        {/* Hobby 1 */}
        <div className="hobby-card">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
            alt="Music"
          />
          <h2>🎵 Listening to Music</h2>
          <p>I love listening to music during my free time.</p>
        </div>

        {/* Hobby 2 */}
        <div className="hobby-card">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
            alt="Photography"
          />
          <h2>📸 Photography</h2>
          <p>I enjoy taking photos of nature and beautiful places.</p>
        </div>

        {/* Hobby 3 */}
        <div className="hobby-card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Coding"
          />
          <h2>💻 Coding</h2>
          <p>I like learning coding and creating new websites.</p>
        </div>

        {/* Hobby 4 */}
        <div className="hobby-card">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136"
            alt="Reading"
          />
          <h2>📚 Reading</h2>
          <p>I enjoy reading books and learning new things.</p>
        </div>

        {/* Hobby 5 */}
        <div className="hobby-card">
          <img
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8"
            alt="Travel"
          />
          <h2>✈️ Travelling</h2>
          <p>I love visiting new places and exploring new locations.</p>
        </div>

      </div>
    </div>
  );
}

export default Hobbies;