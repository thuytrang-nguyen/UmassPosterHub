import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import Posters from "./components/posters";
import "./App.css";

function App() {
  const [activeItem, setActiveItem] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleNavItemClick = (item) => {
    setActiveItem(item);
  };

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      // You may want to perform additional checks or validations here
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const images = Array.from({ length: 9 }, (_, index) => `pos${index + 1}.png`);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="App">
      <h4>UMASS POSTER HUB</h4>
      <div className="search-wrapper">
        <input className="searchbar" type="text" placeholder="Search" />
        <input
          type="file"
          onChange={handleUpload}
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <button className="upload-btn" onClick={triggerFileInput}>
          Upload poster
        </button>
      </div>
      <div className="selector-wrapper">
        <span>Sort by: </span>
        <select>
          <option value="timeCreated">time created</option>
          <option value="alphabetic">alphabetic</option>
        </select>
      </div>
      <NavBar activeItem={activeItem} handleNavItemClick={handleNavItemClick} />
      {activeItem === 0 && (
        <Posters
          images={images}
          handleImageClick={handleImageClick}
          uploadedImage={uploadedImage}
        />
      )}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <img src={fullscreenImage} alt="fullscreen" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
}

export default App;
