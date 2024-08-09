import React from "react";
import { images } from "../imagesData";
const Images = () => {
  return (
    <>
      {images.map((imgSrc, index) => (
        <div
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          key={index}
          className="w-1/3 shrink-0 object-cover"
        ></div>
      ))}
    </>
  );
};

export default Images;
