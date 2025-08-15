import { motion } from "framer-motion";
import Image from "next/image";
import images from "@/app/assets/data-image";

const projects = [images.project1, images.project2, images.project3, images.project4];
const brandName = "SantaiiinAja";

const MarqueePortfolio = () => {
  const repeatedProjects = [...projects, ...projects];

  return (
    <div className="relative overflow-hidden w-full py-6">
      <motion.div
        className="absolute top-4 left-0 p-4 dark:bg-neutral-900 bg-pink-500 flex gap-12 text-3xl font-bold text-white dark:text-pink-400"
        animate={{ x: ["0%", "-50%"] }} // brand tetap ke kiri
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}
      >
        {[...Array(20)].map((_, i) => (
          <span key={i} className="whitespace-nowrap ">{brandName}</span>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-6 w-max mt-20"
        animate={{ x: ["-50%", "0%"] }} // direction ke kanan
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 16, ease: "linear" } }}
      >
        {repeatedProjects.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={src}
              alt={`Project ${idx + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueePortfolio;
