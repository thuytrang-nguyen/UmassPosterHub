import React from "react";
import "./posters.css";

const Posters = (props) => {
  const { images, handleImageClick } = props;

  return (
    <div className="grid-container">
      {images.map((filename, index) => (
        <div
          className="grid-item"
          key={index}
          onClick={() => handleImageClick(require(`../images/${filename}`))}
        >
          <img src={require(`../images/${filename}`)} alt={`${filename}`} />
        </div>
      ))}
    </div>
  );
};

export default Posters;
