import React from "react";
import Arrow from "./Arrow";
import { images } from "../imagesData";

const ArrowButton = (props) => {
  const arrowClassname =
    "flex items-center justify-center rounded-full border border-black px-8 py-2 text-gunmetal transition-colors hover:bg-black hover:text-white";

  const nextImage = () => {
    if (props.imageIndex < images.length - 1) {
      props.setImageIndex(props.imageIndex + 1);
    }
  };

  const prevImage = () => {
    if (props.imageIndex > 0) {
      props.setImageIndex(props.imageIndex - 1);
    }
  };
  return (
    <div className="flex w-full justify-end gap-4">
      <button onClick={prevImage} className={arrowClassname}>
        <Arrow />
      </button>
      <button onClick={nextImage} className={`rotate-180 ${arrowClassname}`}>
        <Arrow />
      </button>
    </div>
  );
};

export default ArrowButton;
