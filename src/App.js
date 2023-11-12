import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import Posters from "./components/posters";
import "./App.css";

function App() {
  const [activeItem, setActiveItem] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleNavItemClick = (item) => {
    setActiveItem(item);
  };

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  const images = Array.from({ length: 9 }, (_, index) => `pos${index + 1}.png`);

  return (
    <div className="App">
      <h4>UMASS POSTER HUB</h4>
      <div className="search-wrapper">
        <input className="searchbar" type="text" placeholder="Search" />
        <button className="upload-btn">Upload poster</button>
      </div>
      <div className="selector-wrapper">
        <span>Sort by: </span>
        <select>
          <option value="timeCreated">time created</option>
          <option value="alphabetic">alphabetic</option>
        </select>
      </div>
      <NavBar activeItem={activeItem} handleNavItemClick={handleNavItemClick} />
      {activeItem === 0 && <Posters images={images} handleImageClick={handleImageClick} />}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <img src={fullscreenImage} alt="fullscreen" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
}

export default App;
