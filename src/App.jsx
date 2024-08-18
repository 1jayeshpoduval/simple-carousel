import { useState } from "react";
import { images } from "./imagesData.js";
import { motion, useMotionValue } from "framer-motion";
import Images from "./Components/Images.jsx";
import ArrowButton from "./Components/ArrowButton.jsx";
import Dots from "./Components/Dots.jsx";

function App() {
  const [imageIndex, setImageIndex] = useState(0);

  const dragX = useMotionValue(0);

  const handleDrag = () => {
    if (dragX.current < 0 && imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    } else if (dragX.current > 0 && imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <>
      <main>
        <section className="flex h-screen flex-col overflow-hidden bg-neutral-200 py-12">
          <div className="mx-auto flex h-full w-90% max-w-screen-2xl flex-col items-center justify-center gap-8">
            <ArrowButton
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
            />
            <motion.div
              className="flex h-1/2 w-full cursor-grab gap-4 active:cursor-grabbing"
              drag="x"
              style={{ x: dragX }}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDrag}
              animate={{
                translateX: `calc(-${imageIndex * 33.33}% - ${imageIndex * 1}rem)`,
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.65 }}
            >
              <Images />
            </motion.div>
            <Dots imageIndex={imageIndex} setImageIndex={setImageIndex} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
