import React from "react";
import photo from "./assets/photo.jpg";

function Photo() {
  return (
    <div>
      <h2>My Photo</h2>
      <img src={photo} alt="My Photo" width="200" />
    </div>
  );
}

export default Photo;