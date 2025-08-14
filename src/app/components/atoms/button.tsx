import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.button
      className="
        text-sm md:text-xs px-4 py-2 md:px-6 md:py-2 rounded-full cursor-pointer
        bg-[#ee5599] text-white font-medium 
        border border-pink-400/40
        shadow-[0_0_6px_rgba(238,85,153,0.25)]
        backdrop-blur-sm
        relative overflow-hidden
        transition-all duration-300
      "
      whileTap={{
        scale: 0.97,
        transition: { duration: 0.15 },
      }}
      onClick={() => (window.location.href = 'mailto:hardiek@example.com')}
    >
      Get in touch
      <motion.span
        className="absolute inset-0 rounded-full bg-pink-300 opacity-10 blur-[10px] pointer-events-none"
        animate={{ opacity: [0.04, 0.12, 0.04] }}
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

export default Button;
