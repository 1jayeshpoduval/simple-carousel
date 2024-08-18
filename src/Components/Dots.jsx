import React from "react";
import { images } from "../imagesData";
import { motion } from "framer-motion";

const Dots = (props) => {
  const handleDotsClick = (imgIndex) => {
    props.setImageIndex(imgIndex);
  };

  return (
    <>
      <div className="flex gap-2">
        {images.map((_, index) => (
          <button
            className="relative h-2 w-2 rounded-full border border-black"
            key={index}
            onClick={() => handleDotsClick(index)}
          >
            {props.imageIndex === index && (
              <motion.div
                className={`${props.imageIndex === index ? "absolute inset-0 rounded-full bg-black" : ""}`}
                layoutId="activeImage"
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.5,
                }}
              ></motion.div>
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default Dots;
