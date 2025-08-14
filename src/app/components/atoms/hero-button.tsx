import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroButton = () => {
  return (
    <motion.button
      className="
        text-sm md:text-xs mt-6 px-2 py-2 md:px-4 md:py-1.5
        bg-pink-500 text-white font-semibold rounded-full
        border border-pink-700/50
        shadow-[0_0_10px_rgba(220,38,38,0.2),inset_0_0_8px_rgba(220,38,38,0.1)]
        backdrop-blur-sm
        relative overflow-hidden
        hover:shadow-[0_0_12px_4px_rgba(220,38,38,0.3),inset_0_0_12px_rgba(220,38,38,0.15)]
        dark:bg-pink-500/90
        dark:border-pink-400/40
        dark:shadow-[0_0_8px_rgba(255,182,193,0.15),inset_0_0_6px_rgba(255,182,193,0.08)]
        dark:hover:shadow-[0_0_6px_3px_rgba(255,182,193,0.25),inset_0_0_6px_rgba(255,182,193,0.12)]
        group

      "
      initial={{ y: -60, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.45,
        },
      }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => (window.location.href = "mailto:hardiek@example.com")}
    >
      <div className="flex items-center">
        Get Scroll
        <span
          className="ml-1.5 p-1 rounded-full
                 bg-pink-400/80 
                 shadow-[4px_4px_8px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.4)]
                 flex items-center justify-center 
                
                 "
        >
          <ArrowRight size={13} className="text-white group-hover:rotate-84 transition-all ease-in-out duration-300" />
        </span>
      </div>
      <motion.span
        className="absolute inset-0 rounded-xl bg-pink-700/10 dark:bg-pink-300/10 blur-[12px]"
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
};

export default HeroButton;
