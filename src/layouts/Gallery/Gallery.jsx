import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
    "https://picsum.photos/300/200?random=4",
    "https://picsum.photos/300/200?random=5",
    "https://picsum.photos/300/200?random=6",
    "https://picsum.photos/300/200?random=7",
    "https://picsum.photos/300/200?random=8",
    "https://picsum.photos/300/200?random=9",
  ];

  return (
    <main className="gallery-section">
      <h1 className="gallery-heading">Gallery</h1>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={image}
              alt={`Gallery ${index}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
