import React from "react";
import "./imgbox.css";
const ImageBox = ({ image, handleSwitch }) => {
  return (
    <div className="actualImg">
      <h1>ImageBox</h1>
      <img src={image} alt="noImage" id="myImg" onClick={handleSwitch} />
    </div>
  );
};

export default ImageBox;
