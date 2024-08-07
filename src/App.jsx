import { useState } from "react";
import { images } from "./imagesData.js";
import { motion, useMotionValue } from "framer-motion";

function App() {
  const [imageIndex, setImageIndex] = useState(0);

  const dragX = useMotionValue(0);

  console.log(imageIndex);
  const handleDrag = () => {
    if (dragX.current < 0 && imageIndex < images.length - 1) {
      setImageIndex((pv) => pv + 1);
    } else if (dragX.current > 0 && imageIndex > 0) {
      setImageIndex((pv) => pv - 1);
    }
  };

  return (
    <>
      <main>
        <section className="flex h-screen flex-col overflow-hidden bg-mint-cream py-12">
          <div className="mx-auto flex h-full w-90% max-w-screen-2xl items-center">
            <div className="flex h-1/2 w-full cursor-grab active:cursor-grabbing">
              <motion.div
                className="flex w-full gap-4"
                drag="x"
                style={{ x: dragX }}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDrag}
                animate={{
                  translateX: `calc(-${imageIndex * 33.33}% - ${imageIndex * 1}rem)`,
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.65 }}
              >
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
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
